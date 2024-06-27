import ContactCss from '../../styles/modules/ContactCss/ContactCss.module.css'









const ContactVisit = () => {
    return (
        <div className="px-24 py-10 desktop-xs:px-14 mobile-md:px-8 mobile-sm:px-8">
            <div className="grid grid-cols-2 mobile-sm:flex mobile-sm:flex-col mobile-sm:gap-4">
                <div className="max-w-2xl px-32 py-8 desktop-xs:px-24 mobile-md:px-16 mobile-sm:px-12 bg-light-darkPrimary">
                    <h1 className="text-3xl font-normal text-center uppercase text-light-primary">Visit to School</h1>
                    <p className="text-sm font-thin text-center text-gray-300">By Maintaining Safety Measures</p>
                    <div className="my-10 text-center">
                        <h3 className="text-2xl font-normal text-gray-100 uppercase">Address</h3>
                        <p className="pt-2 font-thin text-gray-200">Nava Jyoti Vidyapith</p>
                        <p className="font-thin text-gray-200 ">20/1, E Kapte Para Rd, Authpur,</p>
                        <p className="font-thin text-gray-200 "> Shyamnagar, Bhatpara, West Bengal 743128</p>
                    </div>
                    <div className="my-10 text-center">
                        <h3 className="text-2xl font-normal text-gray-100 uppercase">Email Us</h3>
                        <p className="pt-2 font-thin text-gray-200 underline underline-offset-2">admin@navajyotividyapith.com</p>
                    </div>
                    <div className="my-10 text-center">
                        <h3 className="text-2xl font-normal text-gray-100 uppercase">Call us on</h3>
                        <p className="pt-2 font-thin text-gray-200">888-999-111</p>
                    </div>
                    <div className="my-10 text-center">
                        <h3 className="text-2xl font-normal text-gray-100 uppercase">Office hours</h3>
                        <div className="py-4">
                            <h5 className="font-normal text-gray-100 uppercase text-md">During Class Session</h5>
                            <p className="pt-1 font-thin text-light-primary">7:30 Am to 3:00 Pm</p>
                        </div>
                        <div className="py-4">
                            <h5 className="font-normal text-gray-100 uppercase text-md">During Summer Holiday</h5>
                            <p className="pt-1 font-thin text-light-primary">8:00 Am to 12:00 Pm</p>
                        </div>
                        <div className="py-4">
                            <h5 className="font-normal text-gray-100 uppercase text-md">During Winter Holiday</h5>
                            <p className="pt-1 font-thin text-light-primary">8:30 Am to 12:00 Pm</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-12 mobile-sm:border-2 mobile-sm:border-black">
                   
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.9665583227743!2d88.38108197476487!3d22.84072672309081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f890dd0b90b921%3A0xdf3d4206d1ec43e4!2sNava%20Jyoti%20Vidyapith!5e0!3m2!1sen!2sin!4v1711882075272!5m2!1sen!2sin" 
                style={{ height:'100%', width:'100%', border:'0' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div>
    )
}


export default ContactVisit;