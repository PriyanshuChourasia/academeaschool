import EventDayDetail from '../../data/EventDetail/EventDetailData.json';
import EventDetailButton from '../buttons/EventDetailButton';










const EventCalendar = () => {
    return (
        <div className="py-16">
            <h1 className="text-center font-bold uppercase text-light-darkPrimary text-7xl tracking-wider py-10">School Events</h1>
            <div className='pb-12'>
            <p className="text-center font-thin text-lg">School events are not just moments in time; they are threads woven into the vibrant </p>
            <p className="text-center font-thin text-lg">tapestry of our educational journey, creating memories that linger and stories that </p>
            <p className="text-center font-thin text-lg">unfold with each shared laughter, spirited competition, and the collective heartbeat of </p>
            <p className="text-center font-thin text-lg">a community coming together in celebration of learning and camaraderie.</p>
            </div>

            <div className="py-12 px-16 bg-light-darkPrimary">
                {
                    EventDayDetail.map((eventDay) => (
                        <div className='py-10 w-full bg-white border-b-2 border-b-black hover:shadow-activeHover cursor-pointer flex px-12 justify-between' key={eventDay.id}>
                            <div>
                                <span className='text-md font-thin text-sm'>{eventDay.date}</span>
                                <h1 className=' font-normal  text-light-primary text-5xl'>{eventDay.name}</h1>
                            </div>
                            <div className='py-4'>
                                <EventDetailButton btnName={'More Info'} />
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}




export default EventCalendar;