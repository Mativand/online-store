import {makeAutoObservable} from "mobx";

export default class ProductStore {
     _types: string[];
     _sizes: string[];

    constructor() {
        this._types = ['Кроссовки', 'Сникеры', 'Аксессуары'];
        this._sizes = ['39', '40', '41'];
        makeAutoObservable(this)
    }

    setTypes(types: string[]) {
        this._types = types;
    }

    setSizes(sizes: string[]) {
        this._sizes = sizes;
    }

    types() {
        return this._types;
    }

    sizes() {
        return this._sizes;
    }
}