import HomeCss from '../../styles/modules/HomeCss/HomeCss.module.css';
import event1Img from '../../assets/images/navajyotievent/event1.jpeg';
import event2Img from '../../assets/images/navajyotievent/event3.jpeg';
import event3Img from '../../assets/images/navajyotievent/event4.jpeg';
import CustomButton from '../buttons/CustomButton';
import SchoolEvent from '../../data/EventDataJson/SchoolEvent.json';
import schoolVideo from '../../assets/schoolVideo/SchoolVideo.mp4';





const Event = () => {



    const todayDate = new Date();

    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    const eventCard = [

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
                <p className="text-5xl font-bold text-center uppercase">School events</p>
            </div>
            <div className={`mt-14 py-14 w-full ${HomeCss.eventBg}`}>

               
                <div className=' px-14 mobile-xs:hidden mobile-sm:hidden mobile-md:hidden desktop-xs:hidden'>
                    {/* {
                        eventCard.map((card) => (
                            <div key={card.id} className={`w-96 mx-6 rounded overflow-hidden shadow-lg bg-cover relative`}>
                                <div className='absolute inset-0 bg-black opacity-50'></div>
                                <div className='relative'>
                                    <img src={card.image} alt="Event Image" className='object-cover w-full h-56' />
                                    <div className='absolute inset-0 flex flex-col justify-between h-full p-4 text-white bg-black bg-opacity-50'>
                                        <div>
                                            <span className='text-xl font-thin text-gray-200'>{card.date}</span>
                                        </div>
                                        <div className='absolute bottom-6'>
                                            <span className='text-lg font-semibold'>{card.name}</span>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        ))
                    } */}

                    {/* <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fwww.24ghontalive%2Fvideos%2F1258235285141330%2F&show_text=false&width=560&t=0" width="560" height="314" style={{border:'none',overflow:'hidden'}} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe> */}
                    <h1 className='pb-8 text-2xl font-bold text-center underline text-light-darkSecondary underline-offset-2'>School Foundation Day Celebrations Covered by <b className='text-red-800'>24GhontaLive</b></h1>
                    <div className='flex justify-center'>
                    <video controls>
                        <source src={schoolVideo} type="video/mp4" />
                    </video>
                    </div>
            

                </div>


                <div className='hidden mobile-xs:block mobile-sm:block mobile-md:block desktop-xs:block'>
                    <div className='flex justify-center px-14 mobile-xs:block mobile-sm:block mobile-md:block desktop-xs:block '>
                        {
                            SchoolEvent.map((school, index) => (
                                <div key={index} className='px-12 py-6 mb-2 bg-white border-2 border-light-darkPrimary'>
                                    <div className='flex items-center content-center justify-between mobile-xs:flex-col mobile-sm:flex-col mobile-sm:gap-4'>
                                        <div>
                                            <p className='text-sm mobile-xs:text-[10px] mobile-sm:text-[11px] mobile-md:text-xs'>{school.date}</p>
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


                <div className='flex justify-center mt-12 mobile-xs:hidden mobile-sm:hidden mobile-md:hidden desktop-xs:hidden'>
                    <CustomButton btnClass={'py-3 text-md tracking-wider text-white border px-12 font-thin hover:bg-white bg-light-darkPrimary hover:text-light-textColor transition-all duration-300 ease-in '} link={'events'} btnName={'View Events'} />
                </div>


            </div>
        </>
    )
}





export default Event;