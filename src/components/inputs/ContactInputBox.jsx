




const ContactInputBox = ({labelName,typeName,placeHolderText}) =>{
    return(
        <div className="flex flex-col">
        <label htmlFor={labelName ? labelName : 'text'} className="text-lg">{labelName}</label>
        <input type={typeName ? typeName : 'text'} id={labelName ?  labelName : 'idText'} className="text-lg py-4 px-2 border mt-1  border-light-darkPrimary" placeholder={placeHolderText ? placeHolderText : 'placeHolder'}/>
        </div>
    )
}




export default ContactInputBox;