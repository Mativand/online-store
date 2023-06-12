import {FC} from 'react';
import {Header} from "@/widgets/header";
import {Outlet} from "react-router-dom";

export const Root: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};
