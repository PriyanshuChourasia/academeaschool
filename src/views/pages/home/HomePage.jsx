import Event from "../../../components/HomeComponents/Event";
import Hero from "../../../components/HomeComponents/Hero";
import SignUpNews from "../../../components/HomeComponents/SignUpNews";
import StudentLife from "../../../components/HomeComponents/StudentLife";





const HomePage = () =>{
    return (
        <div>
            <Hero/>
            <StudentLife/>
           <Event/>
           <SignUpNews/>
        </div>
    )
}




export default HomePage;