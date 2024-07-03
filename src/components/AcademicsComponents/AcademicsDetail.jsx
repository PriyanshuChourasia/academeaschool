import SubjectData from '../../data/AcademicsDetail/AcademicsDetailData.json';
import AcademicDetailButton from '../buttons/AcademicDetailButton';

const AcademicsDetail = () => {
  return (
    <div className="flex flex-wrap px-16 py-16 my-8 mobile-sm:px-8 bg-light-primary">
      {
        SubjectData.map((subject, index) => (
          <div key={index} className='flex flex-col w-full border border-white md:w-1/2 md:flex-row'>
            <div className={`${subject.id % 2 === 0 ? 'bg-white' : 'bg-light-darkPrimary'} px-8 py-8 flex-1 flex flex-col justify-between`}>
              <div>
                <p className={`text-center font-semibold text-4xl ${subject.id % 2 === 0 ? 'text-black':'text-white'}`}>{subject.name}</p>
                <p className={`pt-8 text-justify text-lg font-thin ${subject.id % 2 === 0 ? 'text-black':'text-white'} `}>{subject.quote}</p>
              </div>
              <div className='flex justify-center py-8'>
                <AcademicDetailButton btnName={'Learn More'} colorId={subject.id} />
              </div>
            </div>
            <div className='flex-1 bg-red-700 mobile-sm:flex mobile-sm:h-32'>
              <img src={subject.image} className='object-cover w-full h-full' alt="Image" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AcademicsDetail;
