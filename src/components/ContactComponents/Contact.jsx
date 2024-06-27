









const Contact = () =>{

  

    return(
        <div className="px-12 py-12">
            <h1 className="text-6xl font-bold mobile-sm:text-[34px] mobile-md:text-[45px] text-light-darkPrimary uppercase text-center">Contact us</h1>
            <div className="py-8 text-lg font-thin mobile-sm:text-justify">
                <p>Discover the power of communication and collaboration at <span className="text-xl font-semibold text-light-primary">{import.meta.env.VITE_REACT_APP_SCHOOL_NAME}</span> . Our 
                contact page is your direct link to a world of educational excellence. Let's build bridges of understanding together; your questions and feedback are the keystones to our
                success. Reach out and let the journey of knowledge unfold.
                </p>

            </div>
        </div>
    )
}





export default Contact;