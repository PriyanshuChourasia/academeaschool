import HomeCss from '../../styles/modules/HomeCss/HomeCss.module.css';
import event1Img from '../../assets/images/event1.jpg';
import event2Img from '../../assets/images/event2.jpg';
import event3Img from '../../assets/images/event3.jpg';
import DefaultButton from '../buttons/DefaultButton';
import CustomButton from '../buttons/CustomButton';





const Event = () =>{

    const  todayDate =  new Date();

    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    const eventCard=[
        {
            "id":1,
            "date": currentDate,
            "name":"Where Champions Rise Record Fall",
            "image": event1Img,
        },
        {
            "id":2,
            "date": currentDate,
            "name":"A Sporting Spectacle like no other",
            "image": event2Img,
        },
        {
            "id":3,
            "date": currentDate,
            "name":"Where Champions Rise Record Fall",
            "image": event3Img,
        },
    ]




    return(
        <>
         <div className='my-14'>
            <p className="text-center uppercase text-5xl font-bold">latest events</p>
            </div>
        <div className={`mt-14 py-14 w-full ${HomeCss.eventBg}`}>
           
           
            <div className='px-14 flex justify-center'>
                {
                    eventCard.map((card)=>(
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

                <div className='mt-12 flex justify-center'>
                <CustomButton btnClass={'py-3 text-md tracking-wider text-white border px-12 font-thin hover:bg-white bg-light-darkPrimary hover:text-light-textColor transition-all duration-300 ease-in '} btnName={'View Events'} />
                </div>
           


        </div>
        </>
    )
}





export default Event;