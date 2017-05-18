import { Component, Input } from '@angular/core';
import { RowModel } from './row.model';

@Component({
  moduleId: module.id,
  selector: '.ng-grid-body',
  templateUrl: './grid-body.component.html'
})

export class NgGridBody {
  @Input() gridConfig: any;
  @Input() private bodyRows: RowModel[];

  getRows(): RowModel[] {
    return this.bodyRows;
  }

  isSelectable(): boolean {
    return this.gridConfig.rows && this.gridConfig.rows.isSelectable;
  }
}
