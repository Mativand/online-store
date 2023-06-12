import {
    ADMIN_ROUTE,
    AUTH_ROUTE,
    CART_ROUTE,
    HOME_ROUTE,
    PRODUCTS_ROUTE,
    REGISTRATION_ROUTE
} from "@/shared/utils/consts.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "@/app";
import {Registration} from "@/pages/registration";
import {Product} from "@/pages/product";
import {Home} from "@/pages/home";
import {ErrorPage} from "@/pages/error";
import {Auth} from "@/pages/auth";
import {Products} from "@/pages/products";
import {Cart} from "@/pages/cart";
import {Admin} from "@/pages/admin";
import {Root} from "@/pages/root";
import {observer} from "mobx-react-lite";

export const Routing = observer(() => {
    const {user} = useContext(AppContext);
    const isAuth = user?.isAuth();

    const routes = [
        {
            path: '/',
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: HOME_ROUTE,
                    element: <Home/>
                },
                {
                    path: AUTH_ROUTE,
                    element: <Auth/>
                },
                {
                    path: REGISTRATION_ROUTE,
                    element: <Registration/>
                },
                {
                    path: PRODUCTS_ROUTE,
                    element: <Products/>
                },
                {
                    path: PRODUCTS_ROUTE + '/:id',
                    element: <Product/>
                },
                {
                    path: CART_ROUTE,
                    element: <Cart/>
                },
                {
                    path: ADMIN_ROUTE,
                    element: isAuth ? <Admin/> : null
                }
            ]
        },

    ];

    const router = createBrowserRouter(routes);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
});