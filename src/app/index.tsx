import { createContext, FC } from 'react';
import './index.scss';
import { Routing } from '@/pages';
import {UserStore} from '@/entities/user';


interface AppContextProps {
    user: UserStore;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const App: FC = () => {
    const userStore = new UserStore();

    return (
        <AppContext.Provider value={{ user: userStore }}>
            <Routing/>
        </AppContext.Provider>
    );
};