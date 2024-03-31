import { Link } from "react-router-dom"




const CustomButton = ({btnName,btnClass,link}) =>{
    return(
      <Link to={link}><button className={`${btnClass} text-md tracking-wider text-white border `}>{btnName}</button></Link>
    )
}





export default CustomButton;