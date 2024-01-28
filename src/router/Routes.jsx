import { createBrowserRouter } from "react-router-dom";
import Main from "../views/pages/main/Main";
import AboutPage from "../views/pages/about/AboutPage";
import HomePage from "../views/pages/home/HomePage";
import AcademicsPage from "../views/pages/academics/AcademicsPage";
import GalleryPage from "../views/pages/gallery/GalleryPage";
import EventPage from "../views/pages/events/EventPage";
import AdmissionPage from "../views/pages/admissions/AdmissionPage";
import ContactPage from "../views/pages/contact/ContactPage";
import ErrorPage from "../views/pages/error/ErrorPage";







const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'about',
                element:<AboutPage/>
            },
            {
                path:'academics',
                element:<AcademicsPage/>
            },
            {
                path:'gallery',
                element:<GalleryPage/>
            },
            {
                path:'events',
                element:<EventPage/>
            },
            {
                path:'admission',
                element:<AdmissionPage/>
            },
            {
                path:'contact',
                element:<ContactPage/>
            },
            {
                path:'*',
                element:<ErrorPage/>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }


]);






export default router;