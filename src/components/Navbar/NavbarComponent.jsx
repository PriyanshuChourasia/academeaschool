import { NavLink } from "react-router-dom";
import NavbarStyle from '../../styles/modules/NavbarCss/Navbar.module.css';
import { useContext, useState } from "react";
import NavbarContext from "../../context/NavbarContext";





const NavbarComponent = () => {

    const { navOpen , setNavOpen} = useContext(NavbarContext);

   





    const navOption = [
        {
            "id": 1,
            "name": "Home",
            "link": "/academeaschool/",
        },
        {
            "id": 2,
            "name": "About",
            "link": "about",
        },
        {
            "id": 3,
            "name": "Academics",
            "link": "academics",
        },
        {
            "id": 4,
            "name": "Gallery",
            "link": "gallery",
        },
        {
            "id": 5,
            "name": "Events",
            "link": "events",
        },
        // {
        //     "id":6,
        //     "name":"Admissions",
        //     "link":"admission",
        // },
        {
            "id": 7,
            "name": "Contact",
            "link": "contact",
        },
    ];



    const isActive = (match, location) => {
        return match && match.url === location.pathname;
    };


    return (
        <>

            <nav className={`${NavbarStyle.navbarContainer}`}>
                <div className={`${NavbarStyle.navbarOption}`}>
                    {
                        navOption.map((nav) => (
                            <NavLink to={nav.link} key={nav.id}    className={`${NavbarStyle.navLinkOption}`} >{nav.name}</NavLink>
                        ))
                    }
                </div>
            </nav>


            {/* Responsive navbar */}



            <nav className={`${ navOpen ? 'block bg-light-darkPrimary p-4 duration-300 ease-in-out ': 'hidden'} ${NavbarStyle.responsiveNav}`}>
                <div className="flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center">
                        {
                            navOption.map((nav)=>(
                                <NavLink to={nav.link} key={nav.id} onClick={()=> setNavOpen(!navOpen)}  className={({isActive, isPending})=> isPending ? "text-gray-500 py-3 text-lg" : isActive ? "text-white underline underline-offset-1 py-3 text-lg":"text-gray-500 py-3 text-lg"} >{nav.name}</NavLink>
                            ))
                        }
                    </div>
                </div>
            </nav>


        </>
    )
}






export default NavbarComponent;