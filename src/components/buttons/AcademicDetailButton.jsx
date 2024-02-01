








const AcademicDetailButton = ({btnName,colorId}) =>{
    return(
        <button className={`py-3 px-12 ${colorId % 2 == 0 ? 'text-white bg-light-darkPrimary':'bg-white text-light-darkPrimary'}`}>{btnName}</button>
    )
}

export default AcademicDetailButton;