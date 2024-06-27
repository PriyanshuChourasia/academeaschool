import { createBrowserRouter } from "react-router-dom";
// import Main from "../views/pages/main/Main";
// import AboutPage from "../views/pages/about/AboutPage";
// import HomePage from "../views/pages/home/HomePage";
// import AcademicsPage from "../views/pages/academics/AcademicsPage";
// import GalleryPage from "../views/pages/gallery/GalleryPage";
// import EventPage from "../views/pages/events/EventPage";
// import AdmissionPage from "../views/pages/admissions/AdmissionPage";
// import ContactPage from "../views/pages/contact/ContactPage";
// import ErrorPage from "../views/pages/error/ErrorPage";
// import GalleryPictures from "../components/GalleryComponents/GalleryPictures/GalleryPictures";
import { lazy, Suspense } from "react";
import PageLoader from "../global/components/Loader/PageLoader";



 const Main = lazy(()=> import('../views/pages/main/Main'));
 const HomePage = lazy(()=> import('../views/pages/home/HomePage'));
 const AboutPage = lazy(()=> import('../views/pages/about/AboutPage'));
 const AcademicsPage = lazy(()=> import('../views/pages/academics/AcademicsPage'));
 const ContactPage = lazy(()=> import('../views/pages/contact/ContactPage'));
 const ErrorPage = lazy(()=> import('../views/pages/error/ErrorPage'));
 const EventPage = lazy(()=> import('../views/pages/events/EventPage'));
 const AdmissionPage = lazy(()=> import('../views/pages/admissions/AdmissionPage'));
 const GalleryPage = lazy(()=> import('../views/pages/gallery/GalleryPage'));
 const GalleryPictures = lazy(()=> import('../components/GalleryComponents/GalleryPictures/GalleryPictures'));







const router = createBrowserRouter([
    {
        path:'/',
        element: <Suspense fallback={<PageLoader/>}><Main/></Suspense>,
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
            // {
            //     path:'gallery',
            //     element:<GalleryPage/>,
            // },
            // {
            //     path:'gallery/:imageId',
            //     element: <GalleryPictures/>
            // },
            {
                path:'events',
                element:<EventPage/>,
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