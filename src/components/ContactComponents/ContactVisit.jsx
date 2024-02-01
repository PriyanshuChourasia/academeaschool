import ContactCss from '../../styles/modules/ContactCss/ContactCss.module.css'









const ContactVisit = () => {
    return (
        <div className="py-10 px-24">
            <div className="grid grid-cols-2">
                <div className="bg-light-darkPrimary px-32 max-w-2xl py-8">
                    <h1 className="uppercase text-3xl text-light-primary font-normal text-center">Visit to School</h1>
                    <p className="text-center text-sm text-gray-300 font-thin">By Maintaining Safety Measures</p>
                    <div className="text-center my-10">
                        <h3 className="font-normal text-2xl text-gray-100 uppercase">Address</h3>
                        <p className="text-gray-200 font-thin pt-2">500 Terry Francine Street</p>
                        <p className="text-gray-200 font-thin ">San Francisco, CA 94158</p>
                    </div>
                    <div className="text-center my-10">
                        <h3 className="uppercase text-2xl text-gray-100 font-normal">Email Us</h3>
                        <p className="text-gray-200 font-thin pt-2 underline underline-offset-2">info@email.com</p>
                    </div>
                    <div className="text-center my-10">
                        <h3 className="text-gray-100 font-normal uppercase text-2xl">Call us on</h3>
                        <p className="text-gray-200 font-thin pt-2">888-999-111</p>
                    </div>
                    <div className="text-center my-10">
                        <h3 className="text-gray-100 font-normal uppercase text-2xl">Office hours</h3>
                        <div className="py-4">
                            <h5 className="uppercase text-md font-normal text-gray-100">During Class Session</h5>
                            <p className="font-thin pt-1 text-light-primary">7:30 Am to 3:00 Pm</p>
                        </div>
                        <div className="py-4">
                            <h5 className="uppercase text-md font-normal text-gray-100">During Summer Holiday</h5>
                            <p className="font-thin pt-1 text-light-primary">8:00 Am to 12:00 Pm</p>
                        </div>
                        <div className="py-4">
                            <h5 className="uppercase text-md font-normal text-gray-100">During Winter Holiday</h5>
                            <p className="font-thin pt-1 text-light-primary">8:30 Am to 12:00 Pm</p>
                        </div>
                    </div>
                </div>
                <div className="py-12 px-8">
                    <div className={`${ContactCss.contactMapBg}`}>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactVisit;