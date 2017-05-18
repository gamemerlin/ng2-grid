import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '.ng-grid-header',
  templateUrl: './grid-header.component.html'
})

export class NgGridHeader implements OnInit {
  firstHeaderRow: any[] = [];
  secondHeaderRow: any[] = [];
  flattenedColumns: any[] = [];
  hasGroupedColumns = false;
  isSelectAll = false;

  @Input() gridConfig: any;
  @Output() onSelectAll = new EventEmitter();
  @Output() onSort = new EventEmitter();
  @Output() onFilter = new EventEmitter();

  ngOnInit() {
    this._buildHeader(this.gridConfig.columns);
  }

  /**
   * Builds the column header out. Inspects the columnDefs to check
   * if we have column groups that need to be separated out between
   * the first or second rows.
   */
  private _buildHeader(columnDefs: any[]) {
    this.hasGroupedColumns = this._scanForGroupedColumns(columnDefs);
    if (this.hasGroupedColumns) {
      this._setFirstTrRowSpans(this.firstHeaderRow);
    }
  }

  /**
   * * Does a pass on all the column defs to see if we have grouped columns.
   * If we do then we call a method to set the correct rowspans.
   */
  private _scanForGroupedColumns(columnDefs: any[]) {
    var columnIndex = 0;

    for (var i = 0, length = columnDefs.length; i < length; i++) {
      var columnDef = columnDefs[i],
          isColumnGroup = columnDef.columns && columnDef.columns.length;

      if (!isColumnGroup) {
        // Set column index for first cell
        columnDefs[i].columnIndex = columnIndex;
        columnIndex++;

        this.flattenedColumns.push(columnDefs[i]);
      }

      // Push this column header into the first row.
      this.firstHeaderRow.push(columnDefs[i]);

      if (isColumnGroup) {
        columnDef.colSpan = columnDef.columns.length;
        for (var j = 0, gLength = columnDef.columns.length; j < gLength; j++) {
          // Set column index
          columnDef.columns[j].columnIndex = columnIndex;
          columnIndex++;

          this.secondHeaderRow.push(columnDef.columns[j]);
          this.flattenedColumns.push(columnDefs[i]);
        }
      }
    }

    return !!this.secondHeaderRow.length;
  }

  /**
   * Sets row spans for the first row fo the table headers.
   * @param firstHeaderRows - First row of cells for table header.
   * @private
   */
  private _setFirstTrRowSpans(firstHeaderRows: any) {
    var HEADER_ROW_SPAN = 2;

    for (var i = 0, length = firstHeaderRows.length; i < length; i++) {
      if (!firstHeaderRows[i].columns) {
        firstHeaderRows[i].rowSpan = HEADER_ROW_SPAN;
      } else {
        firstHeaderRows[i].colSpan = firstHeaderRows[i].columns.length;
      }
    }
  }

  isSelectable(): boolean {
    return this.gridConfig.rows && this.gridConfig.rows.isSelectable;
  }

  onChangeSelectAll(selected: any) {
    this.onSelectAll.emit(selected);
  }

  onSortColumn(column: any) {
    if (typeof column.sort !== 'undefined') {
      this.onSort.emit(column);
    }
  }

  shouldShowFilters(): boolean {
    return true;
  }

  handleFilter(column: any) {
    // Pass this event to parent
    this.onFilter.emit(column);
  }
}
