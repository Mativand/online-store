import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./home";
import {Admin} from "./admin";
import {ErrorPage} from "./error";
import {ADMIN_ROUTE, AUTH_ROUTE, CART_ROUTE, PRODUCTS_ROUTE} from "../shared/utils/consts.ts";
import {Auth} from "./auth";
import {Products} from "./products";
import {Cart} from "./cart";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage/>
    },
    {
        path: AUTH_ROUTE,
        element: <Auth />,
    },
    {
        path: PRODUCTS_ROUTE,
        element: <Products />,
    },
    {
        path: CART_ROUTE,
        element: <Cart />,
    },
];

const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />,
    },
];

const isAuth = true;

const router = createBrowserRouter(isAuth ? [...authRoutes, ...routes] : routes);

export const Routing = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};