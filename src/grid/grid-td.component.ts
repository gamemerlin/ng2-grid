import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: '.ng-grid-td',
    templateUrl: './grid-td.component.html'
})

export class NgGridTd implements OnInit {
    template = '{{ cell.value }}';
    self = this;
    @Input() cell: any;
    @Input() row: any;

    ngOnInit() {
        if (this.cell.template) {
            this.template=this.cell.template;
        }
    }
}
