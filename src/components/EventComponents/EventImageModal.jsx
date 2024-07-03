import EventCss from './styles/EventCss.module.css';


const EventImageModal = ({modalData, eventName}) => {

    console.log(modalData);

  return (
    <div className={`${EventCss.modalOverlay}`}>
      <div className={`${EventCss.modalContent} px-8 py-10 bg-white`}>
            <div className='pb-6 '>
                <h1 className='text-xl font-semibold text-center'>{eventName[0].name}</h1>
            </div>
            <div>
              <img src={modalData[0].image} alt="image" className='px-5'/>
            </div>
      </div>
    </div>
  )
}

export default EventImageModal
