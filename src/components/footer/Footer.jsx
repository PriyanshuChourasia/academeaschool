import { Link } from 'react-router-dom';
import SchoolLogo from '../../assets/images/schoolLogo.jpeg';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { PiWhatsappLogoBold } from "react-icons/pi";









const Footer = () => {  

    const [iconSize, setIconSize] = useState(0);


    useEffect(() => {
        function handleResize() {
            const screenSize = window.innerWidth;
            if (screenSize < 400) {
                setIconSize(25);
            }
            else if (screenSize < 500) {
                setIconSize(25);
            }
            else if (screenSize > 600) {
                setIconSize(32)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <footer className="py-14 mobile-xs:py-4 px-10 bg-light-darkPrimary overflow-hidden">
            <div className="grid mobile-xs:flex mobile-xs:flex-col mobile-xs:gap-10 mobile-xs:mt-4 mobile-xs:justify-center mobile-xs:items-center mobile-sm:flex mobile-sm:flex-col mobile-sm:gap-10 mobile-sm:mt-4 mobile-sm:justify-center mobile-sm:items-center mobile-md:flex mobile-md:flex-col mobile-md:justify-between mobile-md:mt-6 desktop-xs:flex desktop-xs:flex-col desktop-sm:grid-cols-4 desktop-md:grid-cols-4  desktop-lg:grid-cols-4 desktop-xl:grid-cols-4 desktop-2xl:grid-cols-4 gap-4">
                <div className="flex flex-row gap-4 items-center">
                    <img src={SchoolLogo} alt="School Logo" className='w-20 mobile-xs:w-12 mobile-sm:w-14 mobile-md:w-16 desktop-xs:w-20 rounded-full' />
                    <div>
                        <p className='uppercase text-xl mobile-xs:text-lg mobile-sm:text-lg mobile-md:text-xl text-white font-semibold'>{import.meta.env.VITE_REACT_APP_SCHOOL_NAME}</p>
                        <p className='uppercase text-sm mobile-xs:text-sm mobile-sm:text-sm mobile-md:text-lg font-semibold text-light-textColor'>{import.meta.env.VITE_REACT_APP_SCHOOL_ADDRESS}</p>
                    </div>
                </div>
                <div>
                    <p className='uppercase text-2xl mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl font-medium text-light-primary'>Quick Navigation</p>
                    <ul className='py-8 mobile-xs:py-2 mobile-sm:py-4 mobile-md:py-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
                        <li className='py-2 tracking-wider'><Link to={'/academeaschool/'}>Home</Link></li>
                        <li className='py-2 tracking-wider'><Link to={'about'}>About</Link></li>
                        {/* <li className='py-2 tracking-wider'>Event</li> */}
                        <li className='py-2 tracking-wider'><Link to={'gallery'}>Gallery</Link></li>
                        {/* <li className='py-2 tracking-wider'>Admission</li> */}
                    </ul>
                </div>
                <div>
                    <p className='text-light-textColor uppercase font-medium text-2xl mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl'>Stay Connected</p>
                    <ul className='pt-8 mobile-xs:pt-2 mobile-sm:pt-4 mobile-md:pt-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
                        <li className='text-md py-2 text-white'><Link target='_blank' to={'https://www.facebook.com/Navajyoti1974/'}><FaFacebook color='white' size={iconSize} /></Link></li>
                        <li className='text-md py-2 text-white'><Link target='_blank' to={'https://www.instagram.com/sameerbharatram/?hl=en'}><FaSquareInstagram size={iconSize} color='white'/></Link></li>
                        <li className='text-md py-2 text-white'><PiWhatsappLogoBold size={iconSize}/></li>
                    </ul>
                </div>
                <div>
                    <p className='uppercase text-2xl font-medium mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl text-light-primary'>Get in touch</p>
                    <ul className='pt-8 mobile-xs:pt-2 mobile-sm:pt-4 mobile-md:pt-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
                        <li className='text-[18px] leading-5 text-white py-2'>Nava Jyoti Vidyapith</li>
                        <li className='text-[18px] leading-5 text-white py-2'>20/1, E Kapte Para Rd, Authpur,</li>
                        <li className='text-[18px] leading-5 text-white py-2'> Shyamnagar, Bhatpara, West Bengal 743128</li>
                        {/* <li className='text-sm text-white py-2'>info@mysite.com</li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}



export default Footer;