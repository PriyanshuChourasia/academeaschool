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
                        <p className="text-gray-200 font-thin pt-2">Nava Jyoti Vidyapith</p>
                        <p className="text-gray-200 font-thin ">20/1, E Kapte Para Rd, Authpur,</p>
                        <p className="text-gray-200 font-thin "> Shyamnagar, Bhatpara, West Bengal 743128</p>
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
                   
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.9665583227743!2d88.38108197476487!3d22.84072672309081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f890dd0b90b921%3A0xdf3d4206d1ec43e4!2sNava%20Jyoti%20Vidyapith!5e0!3m2!1sen!2sin!4v1711882075272!5m2!1sen!2sin" 
                style={{ height:'100%', width:'100%', border:'0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div>
    )
}


export default ContactVisit;