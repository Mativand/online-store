import {FC} from 'react';
import {Sidebar} from "@/widgets/sidebar";
import {Topbar} from "@/widgets/topbar";

export const Home: FC = () => {
    return (
        <div>
            <Topbar/>
            <Sidebar/>
        </div>
    );
};
