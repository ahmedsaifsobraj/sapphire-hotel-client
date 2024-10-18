import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            }
        ]
    },
]);

export default router;
