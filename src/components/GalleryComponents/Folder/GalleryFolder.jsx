import GalleryImgData from '../../../data/GalleryData/GalleryGithubData.json';
import { Link } from 'react-router-dom';


const GalleryFolder = () => {
    return (
        <>
            <div className='flex justify-center  gap-10 flex-wrap  overflow-hidden mobile-xs:flex mobile-xs:flex-col
             mobile-xs:justify-center mobile-xs:items-center mobile-xs:gap-4
            mobile-sm:flex-col mobile-sm:justify-center mobile-sm:items-center mobile-sm:gap-4
             mobile-md:flex-wrap mobile-md:gap-6  mobile-md:justify-center mobile-md:items-center
            desktop-xs:flex-wrap desktop-xs:gap-6 desktop-xs:justify-center desktop-xs:items-center'>
                {
                    GalleryImgData.filter(imgParent => imgParent.parentId == null).map((imgVal, index) => (
                     <Link key={index}  to={`${imgVal.id}`}>  <div className="h-64 cursor-pointer w-96 mobile-xs:h-40 rounded-2xl
                      px-1 py-1 bg-[#e7b749]
                      relative mobile-xs:w-80
                         mobile-sm:h-44 mobile-sm:w-80 mobile-md:h-56 mobile-md:w-96 desktop-xs:h-60 desktop-xs:w-96 border
                          overflow-hidden border-black">
                            <div className='absolute inset-0 bg-black opacity-50'></div>
                                
                                <img src={imgVal.image} alt="" className='h-full w-full rounded-xl' />
                                <div className='absolute flex flex-col justify-center items-center h-36 w-full
                                 bg-[#e7b749] bottom-1 rounded-xl mobile-xs:h-24 mobile-sm:h-24 mobile-md:h-28'>
                                    <h2 className='text-3xl font-semibold mobile-xs:text-lg mobile-sm:text-xl mobile-md:text-2xl'>{imgVal.name}</h2>
                                    <h3 className='text-sm font-normal mobile-xs:text-xs mobile-sm:text-xs mobile-md:text-xs'>{imgVal.doe}</h3>
                                </div>
                        </div>
                        </Link> 
                    ))
                }
            </div>
        </>
    )
}



export default GalleryFolder;