import React, {FC} from 'react';
import {Routing} from "../pages";
import './index.scss';

export const App: FC = () => {
    return (
        <React.StrictMode>
            <Routing/>
        </React.StrictMode>
    );
};