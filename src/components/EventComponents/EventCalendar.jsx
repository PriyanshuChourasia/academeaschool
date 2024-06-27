import EventDayDetail from '../../data/EventDetail/EventDetailData.json';
import EventDetailButton from '../buttons/EventDetailButton';










const EventCalendar = () => {
    return (
        <div className='mb-10'>

            <div className="px-4 pt-6 pb-16">
                <h1 className="py-10 font-bold tracking-wider text-center uppercase text-wrap text-light-darkPrimary mobile-sm:text-4xl text-7xl">School Events</h1>
                <div className='pb-12 text-center text-wrap'>
                    <p className="text-lg font-thin">
                        School events are not just moments in time; they are threads woven into the vibrant 
                        tapestry of our educational journey, creating memories that linger and stories that
                        unfold with each shared laughter, spirited competition, and the collective heartbeat of
                        a community coming together in celebration of learning and camaraderie.
                    </p>
                </div>

            </div>

            <div className="px-16 py-12 bg-light-darkPrimary">

            </div>
        </div>
    )
}




export default EventCalendar;