import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./home";
import {Admin} from "./admin";
import {ErrorPage} from "./error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage/>
    },
    {
        path: "admin",
        element: <Admin />,
    },
]);

export const Routing = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};