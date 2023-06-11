import {FC, useContext} from "react";
import {AppContext} from "@/app";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {PRODUCTS_ROUTE} from "@/shared/utils/consts.ts";


export const ProductList: FC = observer(() => {
    const {product} = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <div>
            {product.products().map(product =>
                <div key={product} onClick={() => navigate(PRODUCTS_ROUTE + '/' + product)}>
                    {product}
                </div>
            )}
        </div>
    );
});