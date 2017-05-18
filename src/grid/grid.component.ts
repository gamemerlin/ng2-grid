import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RowModel } from './row.model';
import { GridMetaService } from './grid-meta.service';

@Component({
  moduleId: module.id,
  selector: '.ng-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['grid.component.css'],
})

export class NgGrid implements OnInit {
  private _rows: RowModel[] = [];
  private _flattenedColumns: any[] = [];
  private _filterSet: any[] = [];
  private _filteredItems: any[];
  private _metaSevice: GridMetaService;

  @Input() items: any[] = [];
  @Input() private config: any;

  @Output() onFilter = new EventEmitter();

  constructor(metaService: GridMetaService) {
    this._metaSevice = metaService;
  }

  ngOnInit() {
    this._setFlattendedColumns();
    this._buildTableRows(this.items, this._flattenedColumns);
    this._metaSevice.setItems(this.items);
    this._metaSevice.setConfig(this.config);
  }

  private _setFlattendedColumns() {
    let columnDefinitions: any[] = this.config.columns;

    for (var i = 0, length = columnDefinitions.length; i < length; i++) {
      let rowOneColumnDef = columnDefinitions[i];
      if (rowOneColumnDef.field) {
        this._addFlattenedColumn(rowOneColumnDef);
      } else if (rowOneColumnDef.columns && rowOneColumnDef.columns.length) {
        // If we have a grouped column drill in an get the actual column.
        let groupedColumnDefs = rowOneColumnDef.columns;
        for (var j = 0, gLength = groupedColumnDefs.length; j < gLength; j++) {
          var rowTwoColumnDef = groupedColumnDefs[j];
          if (rowTwoColumnDef.field) {
            this._addFlattenedColumn(rowTwoColumnDef);
          }
        }
      }
    }
  }

  private _addFlattenedColumn(column: any) {
    // Breaking apart grouped columns to get single columns in the right order.
    this._flattenedColumns.push(column);
    // Store custom css settings.
    //if (column.css) {
    //  var key = column.field;
    //
    //  // A field can be of the form {key: String, getter: Function}
    //  if (typeof column.field === 'object') {
    //    key = column.field.key;
    //  }
    //  this.cellCssClasses[key] = column.css.cell || [];
    //}
  }

  private _buildTableRows(rowData: any[], columnOrdering: any) {
    this._rows.length = 0;

    for (var i = 0, length = rowData.length; i < length; i++) {
      var row = new RowModel(rowData[i], columnOrdering);
      this._rows.push(row);
    }
  }

  private _isEmpty(obj: any): boolean {
    if (typeof obj === 'undefined' || !obj) {
      return true
    } else if (typeof obj === 'string') {
      return obj.trim() === '';
    } else if (Array.isArray(obj)) {
      return obj.length > 0;
    }

    return false;
  }

  getViewPortRows() {
    if (this.config.pagination) {
      return this._getPage(this._rows);
    }

    return this._rows;
  };

  getVisibleRows() {
    return this._rows;
  }

  getConfig() {
    return this.config;
  }

  selectAllRows(isSelected: boolean) {
    for (let row of this._rows) {
      row.isSelected = isSelected;
    }
  }

  getColSpan(): number {
    let colSpan = this._flattenedColumns.length;

    if (this.getConfig().rows && this.getConfig().rows.isSelectable) {
      colSpan++;
    }
    return colSpan;
  }

  isPaginationVisible() {
    return this.items && this.items.length && this.config && this.config.pagination;
  }

  private _getPage(rowSet: RowModel[]) {
    let pagingState = this.config.pagination,
        startIndex = (pagingState.current - 1) * pagingState.pageSize,
        endingIndex = (startIndex + pagingState.pageSize);

    return rowSet.slice(startIndex, endingIndex);
  }

  sortTable(column: any) {
    if (column.sort && column.sort.isAscending === undefined) {
      column.sort.isAscending = false;
    }

    column.sort.isAscending = !column.sort.isAscending;

    this._applySort(column);
  }

  private _applySort(column: any) {
    let defaultComparitor = function(item1, item2) {
      if (item1.getData()[column.field] > item2.getData()[column.field]) {
        return column.sort.isAscending ? 1 : -1;
      }

      if (item1.getData()[column.field] < item2.getData()[column.field]) {
        return column.sort.isAscending ? -1 : 1;
      }

      return 0;
    };

    let comparitor = column.sort && column.sort.comparitor ? column.sort.comparitor : defaultComparitor;

    this._rows.sort(comparitor);
  }

  filterBy(column: any) {
    if (column.filter && !this._isEmpty(column.filter.value)) {
      let foundItem = this._filterSet.find(function(column, index, list) {
        return column.field === list[index].field;
      });

      if (!foundItem) {
        this._filterSet.push(column);
      }
    }

    this._filterTable();
  }

  private _removeEmptyFilters() {
    this._filterSet = this._filterSet.filter((filterCol) => {
      return !this._isEmpty(filterCol.filter.value);
    });
  }

  private _hasFilterSet(): boolean {
    this._removeEmptyFilters();

    return Boolean(this._filterSet.length);
  }

  public getFilteredItems() {
    return this._filteredItems ? this._filteredItems : this.items;
  }

  private _getSortingColumn() {
    for (let i=0, length=this._flattenedColumns.length; i < length; i++) {
      if (this._flattenedColumns[i].sorting !== 'undefined') {
        return this._flattenedColumns[i];
      }
    }

    return null;
  }

  private _createViewPortRows(data: any) {
    this._rows.length = 0;

    let rowSet = data;

    if (!rowSet) {
      rowSet = this._filteredItems ? this._filteredItems : this.items;
    }

    if (this._getSortingColumn()) {
      this._applySort(this._getSortingColumn());
    }

    if (this.config.pagination) {
      rowSet = this._getPage(rowSet);
    }

    for (let row of rowSet) {
      this._rows.push(new RowModel(row, this._flattenedColumns));
    }
  }

  private _filterTable() {
    if (!this._hasFilterSet()) {
      this._filteredItems = null;
      this._createViewPortRows(null);
      this.onFilter.emit({
        filteredItems: this.getFilteredItems(),
        appliedFilters: this._filterSet
      });

      return;
    }

    let defaultComparitor = function(item: any) {
      // coerce item value to string.

      let columnValue = this.field.getter ? this.field.getter(item) : item[this.field],
          fieldValue = columnValue.toString().toLowerCase(),
          filterValue = this.filter.value,
          filterType = this.filter.type;

      if (typeof filterValue === 'string') {
        filterValue = [filterValue];
      }

      if (Array.isArray(filterValue)) {
        let matched = filterValue.filter((v) => {
          if (filterType === 'select') {
            return fieldValue === v.toString().toLowerCase();
          }
          return fieldValue.indexOf(v.toString().toLowerCase()) > -1
        });

        return Boolean(matched.length);
      }

      return false;
    };

    let filtered = this.items;

    for (let filterCol of this._filterSet) {
      let comparitor = filterCol.comparitor || defaultComparitor;

      filtered = filtered.filter(comparitor.bind(filterCol));
    }

    this._filteredItems = filtered;

    this._createViewPortRows(null);

    this.onFilter.emit({
      filteredItems: this.getFilteredItems(),
      appliedFilters: this._filterSet
    });
  }
}
