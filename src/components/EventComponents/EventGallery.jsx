import { Link } from 'react-router-dom';
import GalleryData from '../../data/GalleryData/GalleryData.json';


const EventGallery = () => {
    return (
        <div className="mobile-sm:px-10 mobile-xs:px-8">
            <div>
                {
                    GalleryData.filter(x => x.parentId === null).map((item, index) => (
                        <div key={index} className='px-4 py-6 mb-12 bg-gray-100 rounded-md'>
                            <div className='pb-4 '>
                                <p className='m-0 text-2xl font-semibold text-center underline text-light-primary'>{item.name}</p>
                            </div>
                            <div>
                                <Link to={`${item.id}`}>
                                    <img src={item.image} alt={item.name} />
                                </Link>
                                <div className='px-2 py-2 mt-3'>
                                    <p className='m-0 font-semibold text-light-cardColor'>Date: {item.doe}</p>
                                    <p className='m-0 font-semibold text-light-primary'>Event: {item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventGallery
