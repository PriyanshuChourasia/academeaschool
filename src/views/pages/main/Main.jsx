import NavbarComponent from "../../../components/Navbar/NavbarComponent";
import CopyRight from "../../../components/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderComponent from "../../../components/header/HeaderComponent";
import {Outlet} from 'react-router-dom';






const Main = () =>{
    return(
        <>
        <HeaderComponent/>
        <NavbarComponent/>
        <Outlet/>
        <Footer/>
        <CopyRight/>
        </>
    )
}




export default Main;