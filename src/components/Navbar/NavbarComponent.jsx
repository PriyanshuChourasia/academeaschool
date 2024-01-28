import { NavLink } from "react-router-dom";





const NavbarComponent = () =>{


    const navOption = [
        {
            "id":1,
            "name":"Home",
            "link":"/",
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
        <nav className="w-full py-4 bg-light-darkPrimary">
            <div className="justify-center flex gap-14">
                {
                    navOption.map((nav)=>(
                        <NavLink to={nav.link} key={nav.id} className="text-lg cursor-pointer  font-thin text-gray-300 hover:[text-shadow:1px_1px_20px_rgb(255,255,255)] shadow-white transition-all duration-300 ease-in" >{nav.name}</NavLink>
                    ))
                }
            </div>
        </nav>
    )
}






export default NavbarComponent;