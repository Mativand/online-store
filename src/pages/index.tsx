import {ADMIN_ROUTE, AUTH_ROUTE, CART_ROUTE, PRODUCTS_ROUTE, REGISTRATION_ROUTE} from "@/shared/utils/consts.ts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "@/app";
import {ErrorPage}  from "./error";
import {Home}       from "./home";
import {Admin}      from "./admin";
import {Auth}       from "./auth";
import {Products}   from "./products";
import {Cart}       from "./cart";
import {Registration} from "@/pages/registration";

export const Routing = () => {
    const {user} = useContext(AppContext) || {};

    const routes = [
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>
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
            path: CART_ROUTE,
            element: <Cart/>
        },
    ];

    const authRoutes = [
        {
            path: ADMIN_ROUTE,
            element: <Admin/>
        },
    ];

    const isAuth = user?.isAuth();

    const router = createBrowserRouter(isAuth ? [...authRoutes, ...routes] : routes);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};