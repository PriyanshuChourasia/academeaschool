import PrincipalImage from '../../../assets/images/principalImage.jpg';



const AboutMessage = () => {
    return (
        <div className='my-12 px-4 overflow-hidden'>
            <div className="flex flex-col mobile-xs:flex mobile-sm:flex-col mobile-sm:flex mobile-xs:flex-col mobile-md:flex mobile-md:flex-col gap-4 ">
                <div className='flex justify-center items-center desktop-xs:justify-center desktop-xs:flex desktop-xs:items-center'>
                    <img src={PrincipalImage} alt="Pricipal Image" className='rounded-xl mobile-xs:w-full mobile-xs:h-5/6 mobile-sm:w-full mobile-sm:h-5/6 mobile-md:w-full desktop-xs:h-3/6 desktop-xs:w-4/6 h-5/6 w-3/6 ' />
                </div>
                <div className="px-20 mobile-xs:px-0 mobile-sm:px-0 mobile-md:px-2 mobile-xs:row-span-2 mobile-sm:row-span-2 mobile-md:row-span-2 mobile-md:mt-6">
                    <div className='py-24 mobile-xs:py-8 mobile-sm:py-10 mobile-md:px-2 bg-light-darkPrimary'>
                        <p className='text-light-textColor text-center font-semibold text-4xl mobile-xs:text-[22px] mobile-sm:text-[25px] mobile-md:text-3xl'>Principal's Message</p>
                        <p className='pt-8 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            Dear Students, Parents, and Guardians,
                        </p>
                        <p className='pt-8 mb-2 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            It is with great pleasure and enthusiasm that I welcome you to {import.meta.env.VITE_REACT_APP_SCHOOL_NAME}.
                            As the Principal, I am honored to lead this vibrant community of learners, educators, and families dedicated
                            to academic excellence, personal growth, and character development.
                        </p>
                        <p className='pt-8 mb-2 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            At {import.meta.env.VITE_REACT_APP_SCHOOL_NAME}, we believe that every student has the potential to achieve greatness,
                            and it is our mission to provide the guidance, support, and resources necessary to help them
                            realize their dreams. Our dedicated faculty and staff are committed to creating a nurturing and
                            inclusive learning environment where students are empowered to explore their passions, develop
                            critical thinking skills, and become lifelong learners.
                        </p>

                        <p className='pt-8 mb-2 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            We recognize the importance of fostering strong partnerships between home and school,
                            and we encourage open communication and collaboration between parents, guardians, and
                            educators. Together, we can work hand in hand to ensure that every student receives the
                            support and encouragement they need to succeed academically, socially, and emotionally.
                        </p>

                        <p className='pt-8 mb-2 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            As we embark on a new academic year filled with exciting opportunities and challenges,
                            I encourage each and every student to embrace curiosity, creativity, and perseverance.
                            Whether in the classroom, on the playing field, or in the community, I challenge you to
                            push beyond your comfort zones, set ambitious goals, and strive for excellence in everything you do.
                        </p>

                        <p className='pt-8 mb-2 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            I am confident that with hard work, dedication, and a positive mindset,
                            our students will achieve remarkable things and make a positive impact on
                            the world around them. Together, let us create a school culture where kindness,
                            empathy, and respect are celebrated, and where every individual is valued for
                            their unique talents and contributions.
                        </p>


                        <p className='pt-8 mb-2 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            I am excited to embark on this journey of learning and growth with you,
                            and I look forward to witnessing the incredible achievements and successes that lie ahead.
                        </p>

                        <p className='pt-8 mb-2 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            Wishing you all a rewarding and fulfilling school year!
                        </p>

                        <p className='pt-8 mb-1 px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            Warm regards,
                        </p>
                        <p className='pt-4  px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            [Your Name]
                        </p>
                        <p className='pt-2  px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            Principal
                        </p>
                        <p className='pt-2  px-16 text-lg font-thin tracking-wider mobile-xs:tracking-wide mobile-xs:pt-6 mobile-sm:pt-8 mobile-md:pt-10 mobile-xs:text-[13px] mobile-sm:text-[16px] mobile-md:text-[18px] mobile-sm:tracking-wide mobile-md:tracking-wide text-justify mobile-xs:text-left mobile-sm:text-left mobile-md:text-left text-gray-300 '>
                            {import.meta.env.VITE_REACT_APP_SCHOOL_NAME}
                        </p>


                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutMessage;