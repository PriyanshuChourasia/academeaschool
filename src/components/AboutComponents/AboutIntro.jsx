






const AboutIntro = () => {
    return (
        <div className="px-6">
            <h1 className="pt-8 text-6xl font-bold text-center uppercase text-light-textColor mobile-xs:text-3xl mobile-sm:text-4xl mobile-md:text-5xl">Our school</h1>
            <div className="px-20 py-6 text-left mobile-sm:px-4">
                <p className=" m-0 mb-6 text-3xl mobile-xs:text-[20px] mobile-sm:text-center mobile-sm:text-[22px] mobile-md:text-[24px] font-medium">
                    Welcome to  {import.meta.env.VITE_REACT_APP_SCHOOL_NAME}!
                </p>
                <p className=" m-0 mb-4 text-lg mobile-xs:text-[17px] mobile-sm:text-[18px] mobile-md:text-[20px] font-thin">
                    At Nava Jyoti VidyaPith, we believe in nurturing the minds, hearts, and spirits
                    of our students to help them reach their fullest potential. Established in the
                    year 1974 with a vision to provide a holistic education that prepares students
                    for success in the ever-changing world, our school community is committed to
                    fostering academic excellence, personal growth, and social responsibility.
                </p>
                <p className=" m-0 mb-4 text-lg mobile-xs:text-[17px] mobile-sm:text-[18px] mobile-md:text-[20px] font-thin">
                    Our dedicated faculty and staff bring passion, expertise, and innovation to the classroom, creating dynamic
                    learning environments where students are inspired to explore, question, and discover. We recognize that every
                    child is unique, with their own strengths, interests, and aspirations. Therefore, we strive to provide a
                    diverse range of educational opportunities and support services to meet the individual needs of each student.
                </p>
                <p className=" m-0 mb-4 text-lg mobile-xs:text-[17px] mobile-sm:text-[18px] mobile-md:text-[20px] font-thin">
                    Beyond academics, Nava Jyoti VidyaPith offers a rich array of extracurricular activities, clubs, and athletics
                    programs that allow students to explore their interests, develop leadership skills, and forge lifelong
                    friendships. Whether it's through arts and music, sports and athletics, or community service and global
                    initiatives, we encourage students to pursue their passions and make meaningful contributions to the world
                    around them.
                </p>
                <p className=" m-0 mb-4 text-lg mobile-xs:text-[17px] mobile-sm:text-[18px] mobile-md:text-[20px] font-thin">
                    At the heart of our educational philosophy is a commitment to fostering a culture of inclusivity, respect,
                    and empathy. We celebrate diversity in all its forms and strive to create an environment where every member
                    of our school community feels valued, supported, and empowered to thrive. Through ongoing dialogue,
                    collaboration, and cultural competency initiatives, we work together to cultivate an atmosphere
                    of understanding, acceptance, and mutual respect.
                </p>
                <p className=" m-0 mb-4 text-lg mobile-xs:text-[17px] mobile-sm:text-[18px] mobile-md:text-[20px] font-thin">
                As we embark on our journey of learning and growth together, we invite you to join us in shaping the future 
                of education at  {import.meta.env.VITE_REACT_APP_SCHOOL_NAME}. Together, we can inspire greatness, ignite curiosity, and empower the leaders
                 of tomorrow.
                </p>
                <p className=" m-0 mb-4 text-lg mobile-xs:text-[17px] mobile-sm:text-[18px] mobile-md:text-[20px] font-thin">
                Welcome to Nava Jyoti VidyaPith, where every student has the opportunity to shine!
                </p>
                <p className=" m-0 mb-4 mobile-sm:mb-1 text-3xl text-light-primary mobile-xs:text-[20px] mobile-sm:text-[22px] mobile-md:text-[24px] font-semibold">
                Nava Jyoti VidyaPith
                </p>

            </div>
        </div>
    )
}



export default AboutIntro;