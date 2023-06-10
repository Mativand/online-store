import {makeAutoObservable} from "mobx";

export class ProductStore {
     _types: string[];
     _sizes: string[];
     _selectedType: string;

    constructor() {
        this._types = ['Кроссовки', 'Сникеры', 'Аксессуары'];
        this._sizes = ['39', '40', '41'];
        this._selectedType = 'Кроссовки';
        makeAutoObservable(this)
    }

    setTypes(types: string[]) {
        this._types = types;
    }

    setSizes(sizes: string[]) {
        this._sizes = sizes;
    }

    setSelectedType(type: string) {
        this._selectedType = type;
    }

    types() {
        return this._types;
    }

    sizes() {
        return this._sizes;
    }

    selectedType() {
        return this._selectedType;
    }
}