import { NavLink } from "react-router-dom";
import NavbarStyle from '../../styles/modules/NavbarCss/Navbar.module.css';
import { useContext } from "react";
import NavbarContext from "../../context/NavbarContext";





const NavbarComponent = () =>{

    const {navOpen} = useContext(NavbarContext);

    


    const navOption = [
        {
            "id":1,
            "name":"Home",
            "link":"/academeaschool/",
        },
        {
            "id":2,
            "name":"About",
            "link":"about",
        },
        {
            "id":3,
            "name":"Academics",
            "link":"academics",
        },
        {
            "id":4,
            "name":"Gallery",
            "link":"gallery",
        },
        {
            "id":5,
            "name":"Events",
            "link":"events",
        },
        {
            "id":6,
            "name":"Admissions",
            "link":"admission",
        },
        {
            "id":7,
            "name":"Contact",
            "link":"contact",
        },
    ]


    return(
        <nav className={`${NavbarStyle.navbarContainer}`}>
            <div className={`${NavbarStyle.navbarOption}`}>
                {
                    navOption.map((nav)=>(
                        <NavLink to={nav.link} key={nav.id} className={`${NavbarStyle.navLinkOption}`} >{nav.name}</NavLink>
                    ))
                }
            </div>
        </nav>
    )
}






export default NavbarComponent;