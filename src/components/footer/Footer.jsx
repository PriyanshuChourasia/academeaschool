import { Link } from 'react-router-dom';
import schoolLogo from '../../assets/images/schoolLogo.jpeg';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiWhatsappLogoBold } from "react-icons/pi";


const Footer = () => {

  const iconSize = 30;


  return (
    <div className="grid grid-cols-4 px-10 overflow-hidden mobile-xs:flex-col mobile-xs:flex mobile-sm:flex-col mobile-sm:flex mobile-sm:px-4 py-14 mobile-sm:pt-8 bg-light-darkPrimary">
      <div className="flex gap-4 mobile-sm:gap-4 mobile-sm:justify-center mobile-sm:flex mobile-sm:items-center">
        <img src={schoolLogo} alt="school logo" className='w-16 h-16 rounded-full mobile-sm:w-12 mobile-sm:rounded-full ' />
        <div>
          <p className='text-xl font-semibold text-white uppercase mobile-xs:text-lg mobile-sm:text-lg mobile-md:text-xl'>{import.meta.env.VITE_REACT_APP_SCHOOL_NAME}</p>
          <p className='text-sm font-semibold uppercase mobile-xs:text-sm mobile-sm:text-sm mobile-md:text-lg text-light-textColor'>{import.meta.env.VITE_REACT_APP_SCHOOL_ADDRESS}</p>
        </div>
      </div>

      <div className='px-10 mobile-sm:px-4 mobile-sm:py-6'>
        <p className='uppercase text-2xl text-center mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl font-medium text-light-primary'>Quick Navigation</p>
        <ul className='py-8 mobile-xs:py-2 text-center mobile-sm:py-4 mobile-md:py-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
          <li className='py-2 tracking-wider'><Link to={'/'}>Home</Link></li>
          <li className='py-2 tracking-wider'><Link to={'about'}>About</Link></li>
          <li className='py-2 tracking-wider'><Link to={'event'}>Event</Link></li>
          <li className='py-2 tracking-wider'><Link to={'academics'}>Academics</Link></li>
          <li className='py-2 tracking-wider'><Link to={'contact'}>Contact</Link></li>
        </ul>
      </div>


      <div className='text-center'>
        <p className='text-light-textColor uppercase font-medium text-2xl mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl'>Stay Connected</p>
        <ul className='pt-8 mobile-xs:pt-2 flex flex-col mobile-sm:flex mobile-xs:flex mobile-xs:justify-center mobile-xs:flex-col items-center justify-center mobile-sm:flex-col mobile-sm:pt-4 mobile-md:pt-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
          <li className='py-2 text-white text-md'><Link target='_blank' to={'https://www.facebook.com/Navajyoti1974/'}><FaFacebook color='white' size={iconSize} /></Link></li>
          <li className='py-2 text-white text-md'><Link target='_blank' to={'https://www.instagram.com/navajyoti1974/'}><FaSquareInstagram size={iconSize} color='white' /></Link></li>
          <li className='py-2 text-white text-md'><PiWhatsappLogoBold size={iconSize} /></li>
        </ul>
      </div>



      <div className='text-center mobile-sm:mt-8'>
        <p className='uppercase text-2xl font-medium mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl text-light-primary'>Get in touch</p>
        <ul className='pt-8 mobile-xs:pt-2 mobile-sm:pt-4 mobile-md:pt-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
          <li className='text-[18px] leading-5 text-white py-2'>Nava Jyoti Vidyapith</li>
          <li className='text-[18px] leading-5 text-white py-2'>20/1, E Kapte Para Rd, Authpur,</li>
          <li className='text-[18px] leading-5 text-white py-2'> Shyamnagar, Bhatpara, West Bengal 743128</li>
          {/* <li className='py-2 text-sm text-white'>info@mysite.com</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Footer
