import { useState } from 'react';
import EventType from '../../../data/GalleryData/EventType.json';





const GalleryHeader = () => {

    const [eventActive,setEventActive] = useState(1);


    const handleEvent = (eveId) =>{
        setEventActive(eveId);
    }


  return (
    <div className="w-full pl-40 mt-4 mb-6 mobile-sm:pl-12 mobile-xs:pl-6">
        <div>
            <ul className='flex gap-3'>
                {
                    EventType.map((eve,index)=>(
                        <li onClick={()=> handleEvent(eve.id)} key={index} className={`${eve.id === eventActive ? 'text-light-darkPrimary font-bold' :''} cursor-pointer`}>
                            {eve.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default GalleryHeader;
