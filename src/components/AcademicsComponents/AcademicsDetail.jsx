import SubjectData from '../../data/AcademicsDetail/AcademicsDetailData.json';
import AcademicDetailButton from '../buttons/AcademicDetailButton';








const AcademicsDetail = () => {
    return (
        <div className="py-16 px-16 bg-light-primary my-8 flex flex-wrap">
            {
                SubjectData.map((subject,index) => (
                    <div key={index} className='border border-white w-2/4 grid grid-cols-2'>
                        <div className={`${subject.id % 2 === 0 ? 'bg-white' : 'bg-light-darkPrimary'} px-8 py-8`}>
                            <p className={`text-center font-semibold text-4xl ${subject.id % 2 === 0 ? 'text-black':'text-white'}`}>{subject.name}</p>
                            <p className={`pt-8 text-justify text-lg font-thin ${subject.id % 2 === 0 ? 'text-black':'text-white'} `}>{subject.quote}</p>
                            <div className='py-8 flex justify-center'>
                                <AcademicDetailButton btnName={'Learn More'} colorId={subject.id} />
                            </div>
                        </div>
                        <div className='bg-red-700'>
                            <img src={subject.image} className='h-full' alt="Image" />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}




export default AcademicsDetail;