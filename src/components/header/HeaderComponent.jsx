import Logo from '../../assets/images/schoolLogo.jpeg';
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";






const HeaderComponent = () =>{

    const iconSize = 30;



    return(
        <header className='w-full  bg-light-secondary py-6'>
            <div className='grid grid-cols-3'>
                <div></div>
                <div>
                    <div className='flex flex-row gap-4'>
                        <img src={Logo} alt="School Logo" className='w-14 rounded-full' />
                        <div>
                            <p className='uppercase font-bold text-2xl'>{import.meta.env.VITE_REACT_APP_SCHOOL_NAME}</p>
                            <p className='uppercase text-lg font-thin text-light-textColor'>India</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 py-2 overflow-hidden'>
                    <div className='hover:shadow-lg transition-all ease-in-out duration-300 gap-2 flex overflow-hidden rounded-md cursor-pointer justify-center content-center items-center'>
                        <IoPersonCircleOutline size={iconSize} />
                        <span className='text-lg font-thin'>Login</span>
                    </div>
                    <div className='flex flex-row gap-6 justify-center items-center content-center'>
                        <CiFacebook size={iconSize} />
                        <FaWhatsapp size={iconSize} />
                        <CiTwitter size={iconSize}/>
                    </div>
                </div>
            </div>
        </header>
    )
}





export default HeaderComponent;