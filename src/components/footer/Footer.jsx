import SchoolLogo from '../../assets/images/schoolLogo.jpeg';









const Footer = () => {  
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
                        <li className='py-2 tracking-wider'>Home</li>
                        <li className='py-2 tracking-wider'>About</li>
                        {/* <li className='py-2 tracking-wider'>Event</li> */}
                        <li className='py-2 tracking-wider'>Gallery</li>
                        {/* <li className='py-2 tracking-wider'>Admission</li> */}
                    </ul>
                </div>
                <div>
                    <p className='text-light-textColor uppercase font-medium text-2xl mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl'>Stay Connected</p>
                    <ul className='pt-8 mobile-xs:pt-2 mobile-sm:pt-4 mobile-md:pt-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
                        <li className='text-md py-2 text-white'>Facebook</li>
                        <li className='text-md py-2 text-white'>Twitter</li>
                        <li className='text-md py-2 text-white'>Whatsapp</li>
                    </ul>
                </div>
                <div>
                    <p className='uppercase text-2xl font-medium mobile-xs:text-[15px] mobile-sm:text-[18px] mobile-md:text-xl text-light-primary'>Get in touch</p>
                    <ul className='pt-8 mobile-xs:pt-2 mobile-sm:pt-4 mobile-md:pt-6 text-white text-lg mobile-xs:text-sm mobile-sm:text-[16px] mobile-md:text-[17px]'>
                        <li className='text-md text-white py-2'>500 Terry Francine Street</li>
                        <li className='text-md text-white py-2'>San Francisco, CA 94158</li>
                        <li className='text-md text-white py-2'>Tel: 123-456-7890</li>
                        <li className='text-md text-white py-2'>info@mysite.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}



export default Footer;