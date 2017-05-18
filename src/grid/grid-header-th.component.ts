import { Component, Input } from '@angular/core';

@Component({
    selector: '.ng-grid-th',
    templateUrl: './grid-header-th.component.html'
})

export class NgGridHeaderTh {
    @Input() column: any;
}
