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
        path:'/academeaschool/',
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/academeaschool/',
                element:<HomePage/>
            },
            {
                path:'/academeaschool/about',
                element:<AboutPage/>
            },
            {
                path:'/academeaschool/academics',
                element:<AcademicsPage/>
            },
            {
                path:'/academeaschool/gallery',
                element:<GalleryPage/>
            },
            {
                path:'/academeaschool/events',
                element:<EventPage/>
            },
            {
                path:'/academeaschool/admission',
                element:<AdmissionPage/>
            },
            {
                path:'/academeaschool/contact',
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