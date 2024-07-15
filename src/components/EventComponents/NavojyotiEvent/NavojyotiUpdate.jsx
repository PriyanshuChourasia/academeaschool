import schoolVideo from '../../../assets/schoolVideo/SchoolVideo.mp4';



const NavojyotiUpdate = () => {
  return (
    <div className='pb-12 px-14'>
      <h1 className="pb-6 text-2xl font-semibold text-center text-light-darkSecondary">School Foundation Day Report By: <b className="text-red-800">24GhontaLive</b></h1>
      <div className='flex justify-center'>
      <video controls>
        <source src={schoolVideo} type="video/mp4" />
      </video>
      </div>

    </div>
  )
}

export default NavojyotiUpdate
