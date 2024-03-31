import GalleryFolder from "./Folder/GalleryFolder";










const GalleryIntro = () =>{
    return(
        <div className="py-16">
            <h1 className="text-center text-light-darkPrimary text-6xl font-bold uppercase mobile-xs:text-3xl mobile-sm:text-4xl mobile-md:5xl">School Gallery</h1>
            {/* <div className="px-10 py-8">
                <span className="uppercase text-3xl font-semibold underline">Albums</span>
            </div> */}


            <div className="overflow-hidden pt-12 mt-10">
                <GalleryFolder/>
            </div>
        </div>
    )
}





export default GalleryIntro;