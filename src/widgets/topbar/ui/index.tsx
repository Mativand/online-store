import {FC, useContext} from "react";
import {AppContext} from "@/app";
import {observer} from "mobx-react-lite";

export const Topbar: FC = observer(() => {
    const {product} = useContext(AppContext);
    console.log(product.selectedSize())
    return (
        <div>
            {product.sizes().map(size =>
                <span key={size} onClick={() => product.setSelectedType(size)}>
                    {size}
                </span>
            )}
        </div>
    );
});