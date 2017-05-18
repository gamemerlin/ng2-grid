export class CellModel {
  field: any;
  isEditPending: any;
  private _row: any;
  template: any;
  value: any;
  setValue: Function;

  constructor(columnDef: any, row: any) {
    this.field = columnDef.key || columnDef.field;
    this.isEditPending = false;
    this._row = row;
    this.template = columnDef.template;

    if (!columnDef.field) {
      throw new Error('Cell cannot be rendered because ' +
        'it does not have a \'field\' defined.')
    }

    this.value = columnDef.field.getter ?
      columnDef.field.getter(row.getData()) : row.getData()[this.field];

    if (columnDef.field.setter) {
      this.setValue = columnDef.field.setter;
    }
  }
}
