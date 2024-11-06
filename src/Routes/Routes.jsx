import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import Rooms from "../pages/Rooms/Rooms";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
import MyBookings from "../pages/MyBookings/MyBookings";
import SpecialOffers from "../pages/Special Offers/SpecialOffers";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Contact from "../pages/Home/Contact/Contact";

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
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'signin',
                element:<SignIn></SignIn>
            },
            {
                path:'rooms',
                element:<PrivateRoutes><Rooms></Rooms></PrivateRoutes>
            },
            {
                path:'bookings/:id',
                element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
                // loader:({params})=>fetch(`https://sapphire-hotel-server.vercel.app/featuredrooms/${params.id}`)
            },
            {
                path:'mybookings',
                element:<PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path:'specialoffers',
                element:<SpecialOffers></SpecialOffers>
            },
            {
                path:'aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    },
]);

export default router;
