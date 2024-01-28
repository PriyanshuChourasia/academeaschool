import { Link } from 'react-router-dom';
import HeroCss from '../../styles/modules/HomeCss/HomeCss.module.css'








const Hero = () =>{
    return(
        <div className={`${HeroCss.bgImage} py-14 px-8`}>
            <div className='grid grid-cols-2 gap-2'>
            <div className=' bg-light-cardColor px-8 py-4  overflow-hidden'>
                <p className='text-7xl uppercase  font-semibold text-gray-200'>Back to school</p>
                <p className='text-3xl font-semibold text-gray-200 mt-8'>Welcome to a world of possibilities</p>
                <p className='text-md font-thin text-gray-200 pt-1'>Where your journey begins and every click opens a door to new opportunities.</p>
                <div className='bg-light-buttonColor hover:bg-light-cardColor hover:border-white hover:border w-40 mt-8 mb-10 overflow-hidden cursor-pointer py-3 px-2 transition-all duration-300 ease-in hover:shadow-medium'>
                    <Link to={'about'}><p className='text-sm font-thin text-white tracking-widest text-center'>Explore the School</p></Link>
                </div>
            </div>
            </div>
        </div>
    )
}





export default Hero;