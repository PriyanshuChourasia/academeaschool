






const ContactMessageBox = ({labelName}) =>{
    return(
        <div className="flex flex-col">
        <label htmlFor={labelName ? labelName : 'Id label'}>{labelName}</label>
        <textarea className="text-md border border-light-darkPrimary" id={labelName ? labelName : 'Textarea'} cols="30" rows="10"></textarea>
        </div>
    )
}



export default ContactMessageBox;