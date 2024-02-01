import SchoolLogo from '../../assets/images/schoolLogo.jpeg';









const Footer = () => {
    return (
        <footer className="py-14 px-10 bg-light-darkPrimary">
            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-row gap-4 items-center">
                    <img src={SchoolLogo} alt="School Logo" className='w-20  rounded-full' />
                    <div>
                        <p className='uppercase text-xl text-white font-semibold'>{import.meta.env.VITE_REACT_APP_SCHOOL_NAME}</p>
                        <p className='uppercase text-xl font-semibold text-light-textColor'>India</p>
                    </div>
                </div>
                <div>
                    <p className='uppercase text-xl font-medium text-light-primary'>Quick Navigation</p>
                    <ul className='py-8 text-white text-md'>
                        <li className='py-2 tracking-wider'>Home</li>
                        <li className='py-2 tracking-wider'>About</li>
                        <li className='py-2 tracking-wider'>Event</li>
                        <li className='py-2 tracking-wider'>Gallery</li>
                        <li className='py-2 tracking-wider'>Admission</li>
                    </ul>
                </div>
                <div>
                    <p className='text-light-textColor uppercase font-medium text-xl'>Stay Connected</p>
                    <ul className='pt-8'>
                        <li className='text-md py-2 text-white'>Facebook</li>
                        <li className='text-md py-2 text-white'>Twitter</li>
                        <li className='text-md py-2 text-white'>Whatsapp</li>
                    </ul>
                </div>
                <div>
                    <p className='uppercase text-xl font-medium text-light-primary'>Get in touch</p>
                    <div className='pt-8'>
                        <p className='text-md text-white py-2'>500 Terry Francine Street</p>
                        <p className='text-md text-white py-2'>San Francisco, CA 94158</p>
                        <p className='text-md text-white py-2'>Tel: 123-456-7890</p>
                        <p className='text-md text-white py-2'>info@mysite.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}



export default Footer;