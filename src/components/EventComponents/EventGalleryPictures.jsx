import { useParams } from "react-router-dom"
import GalleryData from '../../data/GalleryData/GalleryData.json';
import EventImageModal from "./EventImageModal";

const EventGalleryPictures = () => {

  let { eventId } = useParams();

  const eventHeading = GalleryData.map((x => {
    if (x.id == eventId) {
      return x;
    }
  }));

  const imageModalData = GalleryData.filter(x=> x.id == eventId || x.parentId == eventId);

  return (
    <div className="px-24 py-10 mobile-sm:px-10">

      <div className="pt-4 pb-12">
        <h1 className="text-3xl font-semibold text-center text-light-darkPrimary">{eventHeading[0].name}</h1>
        <h3 className="pt-2 text-lg font-normal text-center text-light-darkPrimary">{eventHeading[0].description}</h3>
      </div>

      {
        GalleryData.filter(x => x.parentId == eventId || x.id == eventId).map((item, index) => (
          <div key={index} className="px-4 py-3 mb-2 bg-light-darkPrimary">
            <div className="px-1 py-1 bg-gray-200">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="py-2 text-zinc-200">
              <p className="m-0 font-bold text-center">{item.eventName}</p>
              <p className="m-0 font-semibold text-center">{item.doe}</p>
            </div>
          </div>
        ))
      }

      <EventImageModal modalData={imageModalData} eventName={eventHeading} />
    </div>
  )
}

export default EventGalleryPictures
