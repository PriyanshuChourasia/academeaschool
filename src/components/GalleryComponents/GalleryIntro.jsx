import GalleryFolder from "./Folder/GalleryFolder";
import GalleryHeader from "./GalleryHeader/GalleryHeader";










const GalleryIntro = () =>{
    return(
        <div className="py-16">
            <h1 className="text-6xl font-bold text-center uppercase text-light-darkPrimary mobile-xs:text-3xl mobile-sm:text-4xl mobile-md:5xl">School Gallery</h1>
            <div className="px-10 py-8">
                <p className="text-lg font-thin text-center">Within the vibrant walls of our school gallery, creativity takes flight and imagination knows no bounds.</p>
                <p className="text-lg font-thin text-center"> Each stroke of color, every meticulously crafted sculpture, and the subtle interplay of light and shadow tell stories that resonate with the soul. </p>
                <p className="text-lg font-thin text-center">  It's a sanctuary where students and artists alike come together to celebrate the beauty of expression in all its forms. </p>
                <p className="text-lg font-thin text-center">   As visitors wander through the halls adorned with masterpieces, they are invited to journey into realms of inspiration and wonder.</p>
            </div>


            <div className="pt-12 mt-10 overflow-hidden">
                <GalleryHeader/>
                <GalleryFolder/>
            </div>
        </div>
    )
}





export default GalleryIntro;