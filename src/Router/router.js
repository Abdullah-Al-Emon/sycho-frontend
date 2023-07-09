import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layout/HomePageLayout/HomePageLayout";
import MainHome from "../Pages/Home/MainHome/MainHome";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePageLayout/>,
        children: [
            {
                path: '/',
                element: <MainHome/>
            }
        ]
    }
])