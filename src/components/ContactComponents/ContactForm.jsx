import ContactButton from "../buttons/ContactButton";
import ContactInputBox from "../inputs/ContactInputBox";
import ContactMessageBox from "../inputs/ContactMessageBox";








const ContactForm = () =>{
    return(
        <div className="py-12 px-28">
            <h2 className="font-medium text-5xl text-light-darkPrimary mb-6 text-center">Contact us by form</h2>
        

            <div className="py-4">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                    <ContactInputBox labelName={'First Name'} placeHolderText={'John'} typeName={'text'} />
                    </div>
                    <div>
                    <ContactInputBox labelName={'Last Name'} placeHolderText={'Doe'} typeName={'text'} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-6">
                    <div>
                    <ContactInputBox labelName={'Email'} placeHolderText={'john@mail.com'} typeName={'email'} />
                    </div>
                    <div>
                    <ContactInputBox labelName={'Phone'} placeHolderText={'888-999-000-111'} typeName={'number'} />
                    </div>
                </div>
                <div className="mt-6">
                    <ContactMessageBox labelName={'Message'} />
                </div>
                <div className="mt-6">
                    <ContactButton btnName={'Submit'} />
                </div>
            </div>
        </div>
    )
}



export default ContactForm;