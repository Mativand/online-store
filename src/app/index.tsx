import { createContext, FC } from 'react';
import './index.scss';
import { Routing } from '@/pages';
import {UserStore} from '@/entities/user';
import {ProductStore} from "@/entities/product";
import {Header} from "@/widgets/header";


interface AppContextProps {
    user: UserStore;
    product: ProductStore;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const App: FC = () => {
    const userStore = new UserStore();
    const productStore = new ProductStore();
    return (
        <AppContext.Provider value={
            { user: userStore,  product: productStore}
        }>
            <Header/>
            <Routing/>
        </AppContext.Provider>
    );
};