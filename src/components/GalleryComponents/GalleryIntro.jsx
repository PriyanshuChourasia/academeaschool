import GalleryFolder from "./Folder/GalleryFolder";










const GalleryIntro = () =>{
    return(
        <div className="py-16">
            <h1 className="text-center text-light-darkPrimary text-6xl font-bold uppercase mobile-xs:text-3xl mobile-sm:text-4xl mobile-md:5xl">School Gallery</h1>
            <div className="px-10 py-8">
                <p className="text-center font-thin text-lg">Within the vibrant walls of our school gallery, creativity takes flight and imagination knows no bounds.</p>
                <p className="text-center font-thin text-lg"> Each stroke of color, every meticulously crafted sculpture, and the subtle interplay of light and shadow tell stories that resonate with the soul. </p>
                <p className="text-center font-thin text-lg">  It's a sanctuary where students and artists alike come together to celebrate the beauty of expression in all its forms. </p>
                <p className="text-center font-thin text-lg">   As visitors wander through the halls adorned with masterpieces, they are invited to journey into realms of inspiration and wonder.</p>
            </div>


            <div className="overflow-hidden pt-12 mt-10">
                <GalleryFolder/>
            </div>
        </div>
    )
}





export default GalleryIntro;