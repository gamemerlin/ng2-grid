import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridMetaService } from "./grid-meta.service";

@Component({
    selector: '.ng-grid-th-filter',
    templateUrl: './grid-header-th-filter.component.html'
})

export class NgGridHeaderThFilter implements OnInit {
    private _metaService: GridMetaService;
    private _selectionOptions: any[] = [];

    @Input() column: any;
    @Output() onFilter = new EventEmitter();

    constructor(metaService: GridMetaService) {
        this._metaService = metaService;
    }

    ngOnInit() {
        console.log('# onInit column is ', this.column)
        if (this.column.filter && this.column.filter.type === 'select') {
            this._selectionOptions = this._buildOptions();
        }
    }

    private _buildOptions() {
        let unique: any = {},
            distinct: any[] = [];

        for (let item of this._metaService.getItems()) {
            let uniqueKey: any = this.column.field.getter ? this.column.field.getter(item) : item[this.column.field];
            if (typeof unique[uniqueKey] === 'undefined') {
                distinct.push({
                    label: uniqueKey,
                    value: uniqueKey
                });
                unique[uniqueKey] = true;
            }
        }
        return distinct;
    }

    filterBy(column: any) {
        this.onFilter.emit(column);
    }

    getSelectOptions() {
        return this._selectionOptions;
    }
}
