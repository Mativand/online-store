import {makeAutoObservable} from "mobx";

interface IUser {
    id: number;
    name: string;
}

export class UserStore {
     _isAuth: boolean;
     _user: IUser | null;
    constructor() {
        this._isAuth = false;
        this._user = null;
        makeAutoObservable(this)
    }

    setIsAuth(value: boolean) {
        this._isAuth = value;
    }

    setUser(user: IUser) {
        this._user = user;
    }

    isAuth() {
        return this._isAuth;
    }

    user() {
        return this._user;
    }
}