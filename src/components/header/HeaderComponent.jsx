import Logo from '../../assets/images/schoolLogo.jpeg';
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useContext, useEffect, useState } from 'react';
import HeaderStyle from '../../styles/modules/Header/Header.module.css';
import NavbarContext from '../../context/NavbarContext';
import { Link } from 'react-router-dom';






const HeaderComponent = () => {

    // const iconSize = 30;
    const [iconSize, setIconSize] = useState(0);
    const {navOpen,setNavOpen} = useContext(NavbarContext)

    useEffect(() => {
        function handleResize() {
            const screenSize = window.innerWidth;
            if (screenSize < 400) {
                setIconSize(28);
            }
            else if (screenSize < 500) {
                setIconSize(30);
            }
            else if (screenSize > 600) {
                setIconSize(36)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const handleNavbarOpen = () =>{
        setNavOpen(!navOpen);
    }



    return (
        <header className={`${HeaderStyle.header} overflow-hidden`}>
            <div className={` ${HeaderStyle.headerContainer}  `}>
                <div className={`${HeaderStyle.headerContainerGrid1}`}>
                    <div className={`${HeaderStyle.headerLogoSchoolName}  `}>
                        <img src={Logo} alt="School Logo" className={`${HeaderStyle.imgLogo}`} />
                        <div className='ml-4'>
                            <p className={`${HeaderStyle.schoolName} `}>{import.meta.env.VITE_REACT_APP_SCHOOL_NAME}</p>
                            <p className={` ${HeaderStyle.schoolAddress} `}>{import.meta.env.VITE_REACT_APP_SCHOOL_ADDRESS}</p>
                        </div>
                    </div>
                    <div>
                        <IoMenu onClick={handleNavbarOpen} size={iconSize} className={`${HeaderStyle.menuIcon}`} />
                    </div>
                </div>
                <div className={`${HeaderStyle.headerGridContainer2} `}>
                    <div className={`${HeaderStyle.headerLoginContainer}`}>
                        <IoPersonCircleOutline size={iconSize} />
                        <span className={`${HeaderStyle.headerLoginText}`}>Login</span>
                    </div>
                    <div className={`${HeaderStyle.socialMediaIcons}`}>
                       <Link target='_blank' to={'https://www.facebook.com/Navajyoti1974/'}><CiFacebook size={iconSize} /></Link>
                        <FaWhatsapp size={iconSize} />
                       <Link target='_blank' to={'https://www.instagram.com/navajyoti1974/'}> <FaInstagram size={iconSize}/></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}





export default HeaderComponent;