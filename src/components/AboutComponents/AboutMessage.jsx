import AboutCss from '../../styles/modules/AboutCss/AboutCss.module.css';





const AboutMessage = () => {
    return (
        <div className='my-12'>
            <div className="grid grid-cols-2 px-20 ">
                <div className={`${AboutCss.principalBg}`}>

                </div>
                <div className='py-24 bg-light-darkPrimary'>
                    <p className='text-light-textColor text-center font-semibold text-4xl'>Principal's Message</p>
                    <p className='pt-12 px-16 text-lg font-thin tracking-wider text-justify text-gray-300'>
                        Welcome to Nava Jyoti Vidyapith! As the proud Principal, I am delighted to extend a warm embrace to our dynamic community of learners, educators, and parents. At Nava Jyoti, we are committed to providing an enriching and transformative educational experience. Our dedicated faculty, state-of-the-art facilities, and emphasis on character development create a nurturing environment where students can thrive academically and personally. We believe in fostering curiosity, creativity, and a sense of responsibility in each student, preparing them for a successful future. Together, let's embark on a journey of learning, growth, and achievement at Nava Jyoti Vidyapith!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 px-20">
                <div className='py-24 bg-light-darkPrimary'>
                    <p className='text-center text-light-textColor font-semibold text-4xl'>Our Vision & Values</p>
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