import EventGallery from "./EventGallery"
import EventIntro from "./EventIntro"
import NavojyotiEvent from "./NavojyotiEvent/NavojyotiEvent"
import NavojyotiUpdate from "./NavojyotiEvent/NavojyotiUpdate"

const Event = () => {
    return (
        <div className="mb-14">
            <EventIntro />
            {/* <EventGallery/> */}
            <NavojyotiUpdate/>
            <NavojyotiEvent/>
        </div>
    )
}

export default Event
