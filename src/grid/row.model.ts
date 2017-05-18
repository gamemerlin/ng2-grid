import { CellModel } from './cell.model';
export class RowModel {
  private _data: any;
  private _cells: any[] = [];
  private isEditPending = false;
  isSelected = false;

  constructor(rowData: any[], flattenedColumns: any[]) {
    this._data = rowData;

    for (var i = 0, length = flattenedColumns.length; i < length; i++) {
      this._cells.push(new CellModel(flattenedColumns[i], this));
    }
  }

  getCells() {
    return this._cells;
  }

  getData = function () {
    return this._data;
  }
}
