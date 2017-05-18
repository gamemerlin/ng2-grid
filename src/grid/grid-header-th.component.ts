import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '.ng-grid-th',
    templateUrl: './grid-header-th.component.html'
})

export class NgGridHeaderTh {
    @Input() column: any;
}
