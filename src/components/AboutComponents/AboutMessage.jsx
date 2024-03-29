import AboutCss from '../../styles/modules/AboutCss/AboutCss.module.css';





const AboutMessage = () => {
    return (
        <div className='my-12 overflow-hidden'>
            <div className="grid mobile-xs:grid-rows-2 mobile-sm:grid-rows-2 mobile-md:grid-rows-2 desktop-xs:grid-cols-2 desktop-sm:grid-cols-2 desktop-md:grid-cols-2 desktop-lg:grid-cols-2 desktop-xl:grid-cols-2 px-20 mobile-xs:px-4 mobile-sm:px-10 mobile-md:px-14 ">
                <div className={`${AboutCss.principalBg}`}>

                </div>
                <div className='py-24 mobile-xs:py-8 mobile-sm:py-10 mobile-md:px-2 bg-light-darkPrimary'>
                    <p className='text-light-textColor text-center font-semibold text-4xl mobile-xs:text-[22px] mobile-sm:text-[25px] mobile-md:text-3xl'>Principal's Message</p>
                    <p className='pt-12 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                        Welcome to {import.meta.env.VITE_REACT_APP_SCHOOL_NAME}! As the proud Principal, I am delighted to extend a warm embrace to our dynamic community of learners, educators, and parents. At Nava Jyoti, we are committed to providing an enriching and transformative educational experience. Our dedicated faculty, state-of-the-art facilities, and emphasis on character development create a nurturing environment where students can thrive academically and personally. We believe in fostering curiosity, creativity, and a sense of responsibility in each student, preparing them for a successful future. Together, let's embark on a journey of learning, growth, and achievement at {import.meta.env.VITE_REACT_APP_SCHOOL_NAME}!
                    </p>
                </div>
            </div>
            <div className="grid mobile-xs:mt-2 mobile-sm:mt-2 mobile-md:mt-2 mobile-xs:grid-rows-2 mobile-sm:grid-rows-2 mobile-md:grid-rows-2 desktop-xs:grid-cols-2 desktop-sm:grid-cols-2 desktop-md:grid-cols-2 desktop-lg:grid-cols-2 desktop-xl:grid-cols-2 desktop-2xl:grid-cols-2 px-20 mobile-xs:px-4 mobile-sm:px-10 mobile-md:px-14">
                <div className='py-24 mobile-xs:py-10 mobile-sm:py-16 mobile-md:px-20 bg-light-darkPrimary'>
                    <p className='text-center text-light-textColor font-semibold text-4xl mobile-xs:text-[22px] mobile-sm:text-[25px] mobile-md:text-3xl'>Our Vision & Values</p>
                    <div className='pt-12 px-16 justify-center flex'>
                    <ul className='text-left list-disc'>
                        <li className='py-2 text-lg text-gray-100'>Self-Discovery</li>
                        <li className='py-2 text-lg text-gray-100'>Continuous Growth</li>
                        <li className='py-2 text-lg text-gray-100'>Global Awareness</li>
                        <li className='py-2 text-lg text-gray-100'>Resilience</li>
                        <li className='py-2 text-lg text-gray-100'>Lifelong Learning</li>
                    </ul>
                    </div>
                </div>
                <div className={`${AboutCss.visionImg}`}>

                </div>
            </div>
        </div>
    )
}



export default AboutMessage;