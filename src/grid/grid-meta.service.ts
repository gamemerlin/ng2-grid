import { Injectable } from '@angular/core';

@Injectable()
export class GridMetaService {
    private _config: any;
    private _items: any[];

    getConfig() {
        return this._config;
    }

    setConfig(config: any) {
        this._config = config;
    }

    setItems(items: any[]) {
        this._items = items;
    }

    getItems() {
        return this._items;
    }
}