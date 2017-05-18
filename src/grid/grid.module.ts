import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentOutlet, provideComponentOutletModule } from 'angular2-component-outlet';

import { NgGrid } from './grid.component';
import { NgGridHeader } from './grid-header.component';
import { NgGridBody } from './grid-body.component';
import { NgGridFooter } from './grid-footer.component';
import { NgGridHeaderTh } from './grid-header-th.component';
import { NgGridTd } from './grid-td.component';
import { NgGridHeaderThFilter } from './grid-header-th-filter.component';
import { GridMetaService } from './grid-meta.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [NgGrid, NgGridHeader, NgGridBody, NgGridFooter, NgGridHeaderTh, NgGridTd, NgGridHeaderThFilter, ComponentOutlet],
    exports: [NgGrid],
    providers: [GridMetaService, provideComponentOutletModule({
        imports: [CommonModule, FormsModule]
    })]
})
export class GridModule { }
