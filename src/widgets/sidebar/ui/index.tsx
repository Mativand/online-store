import {FC, useContext} from "react";
import {AppContext} from "@/app";
import {observer} from "mobx-react-lite";


export const Sidebar: FC = observer(() => {
    const {product} = useContext(AppContext);
    return (
        <div>
            {product.types().map(type =>
                <div key={type}>{type}</div>
            )}
        </div>
    );
});