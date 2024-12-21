import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Surveys from "./views/Surveys";
import SignUp from "./views/SignUp";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path:'/',
                element: <Navigate to='/dashboard'/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/surveys',
                element: <Surveys/>
            },
        ]
    },

    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    }
])

export default router;