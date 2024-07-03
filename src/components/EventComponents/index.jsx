import EventGallery from "./EventGallery"
import EventIntro from "./EventIntro"
import NavojyotiEvent from "./NavojyotiEvent/NavojyotiEvent"

const Event = () => {
    return (
        <div className="mb-14">
            <EventIntro />
            {/* <EventGallery/> */}
            <NavojyotiEvent/>
        </div>
    )
}

export default Event
