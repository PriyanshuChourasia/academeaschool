












const EmailInput = () =>{
    return(
        
<form>
    <div className="flex">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-lg text-gray-100 bg-light-darkPrimary rounded-e-lg rounded-s-gray-100 rounded-s-2 " placeholder="Search" required autoComplete="off" />
            <button type="submit" className="absolute top-0 end-0 p-2.5  px-14 h-full text-md font-medium text-white bg-light-primary rounded-e-lg border  hover:bg-light-cardColor focus:outline-none">SignUp</button>
        </div>
    </div>
</form>

    )
}





export default EmailInput;