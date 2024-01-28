import EmailInput from "../inputs/EmailInput";









const SignUpNews = () =>{
    return(
        <div className="bg-white py-20">
            <p className="text-center uppercase text-6xl font-medium text-light-darkPrimary">Sign up for school news</p>
            <p className="pt-6 font-thin text-2xl text-center">Stay up-to-date with the latest news</p>
            <div className=" px-48 pt-16">
                <EmailInput/>
            </div>
        </div>
    )
}





export default SignUpNews;