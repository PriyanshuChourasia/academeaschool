







const AboutDetailButton = ({btnName,onShowModal}) =>{
    return(
        <button onClick={onShowModal} className="relative rounded px-5 py-2.5 overflow-hidden group bg-light-primary hover:bg-gradient-to-r hover:from-light-cardColor hover:to-light-buttonColor text-gray-100 hover:ring-2 hover:ring-offset-2 hover:ring-light-primary transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease"></span>
            <span className="relative">{btnName ? btnName : 'Button'}</span>
        </button>
    )
}




export default AboutDetailButton;