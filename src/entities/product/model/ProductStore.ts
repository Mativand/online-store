import {makeAutoObservable} from "mobx";

export class ProductStore {
     _types: string[];
     _sizes: string[];
     _products: string[];
    _selectedType: string;
    _selectedSize: string;

    constructor() {
        this._types = ['Кроссовки', 'Сникеры', 'Аксессуары'];
        this._sizes = ['39', '40', '41'];
        this._products = ['Кроссовки 1', 'Кроссовки 2', 'Кроссовки 3'];
        this._selectedType = 'Кроссовки';
        this._selectedSize = '41';
        makeAutoObservable(this)
    }

    setTypes(types: string[]) {
        this._types = types;
    }

    setSizes(sizes: string[]) {
        this._sizes = sizes;
    }

    setProducts(products: string[]) {
        this._products = products;
    }

    setSelectedType(type: string) {
        this._selectedType = type;
    }

    setSelectedSize(size: string) {
        this._selectedSize = size;
    }


    types() {
        return this._types;
    }

    sizes() {
        return this._sizes;
    }

    products() {
        return this._products;
    }

    selectedType() {
        return this._selectedType;
    }

    selectedSize() {
        return this._selectedSize;
    }
}