import ImageData from '../../../../public/navajyotiEvent.json';




const NavojyotiEvent = () => {

    console.log(ImageData,'image data');

  return (
    <div className='flex flex-wrap justify-center gap-4 px-4 pt-6 pb-4'>
        {
            ImageData.map((img,index)=>(
                <div key={index} className='overflow-hidden transition-transform duration-300 transform rounded cursor-pointer w-96 hover:shadow-optionHover hover:scale-105 '>
                    <img src={img.image} alt="img" className='object-cover w-full h-full ' />
                </div>
            ))
        }
      
    </div>
  )
}

export default NavojyotiEvent
