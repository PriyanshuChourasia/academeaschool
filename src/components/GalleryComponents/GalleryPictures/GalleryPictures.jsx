import { useParams } from "react-router-dom";
import GalleryImages from '../../../data/GalleryData/GalleryData.json';
import Image1 from '../../../assets/images/navajyotigallery/img1.jpeg';





const GalleryPictures = () => {

    let { imageId } = useParams();



    return (
        <>
            <div className="py-16">

                <div className="pb-16">
                    <h1 className="text-center font-semibold underline underline-offset-2 text-6xl">{GalleryImages.filter(imgId => imgId.id == imageId).map(val => val.name)}</h1>
                        
                </div>
                <div className="flex justify-center  gap-10 flex-wrap  overflow-hidden mobile-xs:flex mobile-xs:flex-col
             mobile-xs:justify-center mobile-xs:items-center mobile-xs:gap-4
            mobile-sm:flex-col mobile-sm:justify-center mobile-sm:items-center mobile-sm:gap-4
             mobile-md:flex-wrap mobile-md:gap-6  mobile-md:justify-center mobile-md:items-center
            desktop-xs:flex-wrap desktop-xs:gap-6 desktop-xs:justify-center desktop-xs:items-center">
                    {
                        GalleryImages.filter(imgId => imgId.parentId == imageId || imgId.id == imageId).map((imgVal, index) => (
                            <div key={index} className="h-64 cursor-pointer shadow-lg hover:shadow-2xl  duration-300 ease-out w-96 mobile-xs:h-40 rounded-2xl
                        px-1 py-1 bg-[#e7b749]
                         mobile-xs:w-80
                           mobile-sm:h-44 mobile-sm:w-80 mobile-md:h-56 mobile-md:w-96 desktop-xs:h-60 desktop-xs:w-96 border
                            overflow-hidden border-black">
                                <img src={'../../../assets/images/navajyotigallery/img1.jpeg'} alt="" className='h-full w-full rounded-xl' />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}


export default GalleryPictures