import HomeCss from '../../styles/modules/HomeCss/HomeCss.module.css';
import event1Img from '../../assets/images/navajyotievent/event1.jpeg';
import event2Img from '../../assets/images/navajyotievent/event3.jpeg';
import event3Img from '../../assets/images/navajyotievent/event4.jpeg';
import CustomButton from '../buttons/CustomButton';
import SchoolEvent from '../../data/EventDataJson/SchoolEvent.json';





const Event = () => {



    const todayDate = new Date();

    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    const eventCard = [
        {
            "id": 1,
            "date": currentDate,
            "name": "Where Champions Rise Record Fall",
            "image": 'src/assets/images/navajyotievent/event1.jpeg',
        },
        {
            "id": 2,
            "date": currentDate,
            "name": "A Sporting Spectacle like no other",
            "image": event2Img,
        },
        {
            "id": 3,
            "date": currentDate,
            "name": "Where Champions Rise Record Fall",
            "image": event3Img,
        },
    ]




    return (
        <>
            <div className='my-14'>
                <p className="text-center uppercase text-5xl font-bold">School events</p>
            </div>
            <div className={`mt-14 py-14 w-full ${HomeCss.eventBg}`}>


                <div className='px-14 flex justify-center mobile-xs:hidden mobile-sm:hidden mobile-md:hidden desktop-xs:hidden'>
                    {
                        eventCard.map((card) => (
                            <div key={card.id} className={`w-96 mx-6 rounded overflow-hidden shadow-lg bg-cover relative`}>
                                <div className='absolute inset-0 bg-black opacity-50'></div>
                                <div className='relative'>
                                    <img src={card.image} alt="Event Image" className='w-full h-56 object-cover' />
                                    <div className='absolute inset-0  h-full flex flex-col justify-between p-4 bg-black bg-opacity-50 text-white'>
                                        <div>
                                            <span className='text-gray-200 font-thin text-xl'>{card.date}</span>
                                        </div>
                                        <div className='absolute bottom-6'>
                                            <span className='font-semibold text-lg'>{card.name}</span>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        ))
                    }
                </div>
                <div className='hidden mobile-xs:block mobile-sm:block mobile-md:block desktop-xs:block'>
                    <div className='px-14 flex justify-center mobile-xs:block mobile-sm:block mobile-md:block desktop-xs:block '>
                        {
                            SchoolEvent.map((school, index) => (
                                <div key={index} className='py-6 px-12 bg-white border-2 mb-2 border-light-darkPrimary'>
                                    <div className='flex mobile-xs:flex-col mobile-sm:flex-col mobile-sm:gap-4 justify-between items-center content-center'>
                                        <div>
                                            <time className='text-sm mobile-xs:text-[10px] mobile-sm:text-[11px] mobile-md:text-xs'>{`${new Date(school.date).toLocaleDateString([], { day: 'numeric', month: 'short', year: '2-digit' })}`}</time>
                                            <h3 className='text-3xl font-semibold mobile-xs:text-lg mobile-sm:text-xl mobile-md:text-2xl'>{school.name}</h3>
                                        </div>
                                        <div>
                                            <button className='py-3 text-md tracking-wider text-white border px-12 font-thin mobile-xs:px-3 mobile-xs:py-1 mobile-xs:text-[11px] mobile-sm:px-5 mobile-sm:py-2 mobile-sm:text-[11px] mobile-md:text-[13px] mobile-md:px-7 desktop-xs:text-[14px] desktop-xs:px-8  hover:bg-white bg-light-darkPrimary hover:text-light-textColor transition-all duration-300 ease-in'>
                                                {school.link}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className='mt-12 mobile-xs:hidden mobile-sm:hidden mobile-md:hidden desktop-xs:hidden flex justify-center'>
                    <CustomButton btnClass={'py-3 text-md tracking-wider text-white border px-12 font-thin hover:bg-white bg-light-darkPrimary hover:text-light-textColor transition-all duration-300 ease-in '} link={'events'} btnName={'View Events'} />
                </div>


            </div>
        </>
    )
}





export default Event;