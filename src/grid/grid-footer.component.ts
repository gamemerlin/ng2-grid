import { Component, Input, OnInit } from '@angular/core';

class DefaultPagingApi {
  gotoPage(pageNumber: number, pagingState: any) {
    let jumpToPage: number = Math.max(1, pageNumber);
    jumpToPage = Math.min(jumpToPage, pagingState.totalPages);

    pagingState.current = jumpToPage;
  }
}

@Component({
  selector: '.ng-grid-footer',
  templateUrl: './grid-footer.component.html',
  styleUrls: ['grid-footer.component.css'],
})

export class NgGridFooter implements OnInit {
  private _api: any;

  @Input() gridConfig: any;
  @Input() colSpan: number;
  @Input() pagingSet: any[];

  ngOnInit() {
    let defaultPager: any = {
      current: 1,
      pageSize: 10,
      totalPages: 1,
      pageRangeSize: 5,
      perPageSizes: [5, 10, 25, 50, 100]
    };

    this.gridConfig.pagination = Object.assign(defaultPager, this.gridConfig.pagination);

    this._updateTotalPages();

    this._api = new DefaultPagingApi();
  }

  private _updateTotalPages() {
    this.getState().totalPages = Math.ceil(this.pagingSet.length / this.getState().pageSize);
  }

  gotoPage(pageNumber: number) {
    this._updateTotalPages();

    this._api.gotoPage(pageNumber, this.getState());
  }

  getState() {
    return this.gridConfig.pagination;
  }

  getRange() {
    if (this.getState().pageRangeSize) {
      return this._getRangeSetForPage(this.getState().current);
    }

    let range: any[] = [];

    for (let i=1; i<=this.getState().totalPages; i++) {
      range.push(i);
    }

    return range;
  }

  private _getRangeSetForPage(currentPageNumber: number): number[] {
    let range: number[] = [],
        rangeSize = this.getState().pageRangeSize,
        ceiling = rangeSize;

    while (currentPageNumber > ceiling) {
      ceiling += rangeSize;
    }

    let startRange = ceiling - rangeSize +1;

    ceiling = Math.min(ceiling, this.getState().totalPages);

    for (let i=startRange; i<= ceiling; i++) {
      range.push(i);
    }

    return range;
  }


  gotoPagePrevRange() {
    this.gotoPage(this._getRangeSetForPage(this.getState().current)[0] - 1)
  }

  gotoPageNextRange() {
    let range: number[] = this._getRangeSetForPage(this.getState().current);
    this.gotoPage(range[range.length - 1] + 1);
  }

  isButtonDisabled(pageNumber: number) {
    return this.getState().current === pageNumber;
  }

  shouldShowPrevRange() {
    let range: number[] = this._getRangeSetForPage(this.getState().current);
    return range && (range[0] - 1 > 1);
  }

  shouldShowNextRange() {
    let range: number[] = this._getRangeSetForPage(this.getState().current);
    return range && (range[range.length - 1] < this.getState().totalPages);
  }
}
