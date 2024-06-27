import Contact from "../../../components/ContactComponents/Contact";
import ContactForm from "../../../components/ContactComponents/ContactForm";
import ContactVisit from "../../../components/ContactComponents/ContactVisit";









const ContactPage = () =>{
    return(
        <div className="mobile-sm:flex mobile-sm:flex-col">
            <Contact/>
            <ContactVisit/>
            {/* <ContactForm/> */}
        </div>
    )
}





export default ContactPage;