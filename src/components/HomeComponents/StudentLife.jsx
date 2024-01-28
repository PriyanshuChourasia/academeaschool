import DefaultButton from "../buttons/DefaultButton";
import HomeCss from '../../styles/modules/HomeCss/HomeCss.module.css'







const StudentLife = () => {
    return (
        <div className="w-full py-12 mt-8 mb-10">
            <p className="text-center font-bold text-4xl text-light-textColor uppercase">Thriving Excellence: <span className="text-3xl font-thin">Experience the Pinnacle of Student Life!</span></p>
            <p className="mt-6 font-thin text-gray-600 text-center px-32">Discover a world of excellence in our school. From engaging classrooms to enriching activities, we foster holistic growth. Join us for a vibrant student life where each day brings new opportunities to thrive and succeed. Your journey to success begins here!</p>
            <div className="flex mt-8 justify-center">
                <DefaultButton btnName={'Student Life'} />
            </div>

            <div className="px-16 mt-20">
                <div className="grid grid-cols-2">
                    <div className={`${HomeCss.classBackImg}`}>

                    </div>
                    <div className="py-14 px-24 bg-light-darkPrimary">
                        <p className="text-center text-3xl text-gray-400 underline hover:text-gray-100 cursor-pointer">Student Life</p>
                        <p className=" text-gray-200 pt-8 text-justify">Student life: a dynamic tapestry of learning, growth, and connections. Beyond classes, it's where friendships form, passions ignite, and each moment shapes personal and academic success. Embrace the journey — a vibrant chapter filled with opportunities for self-discovery and lasting memories</p>
                        <div className="flex justify-center mt-8">
                            <DefaultButton btnName={'Apply Today'} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="py-14 px-24 bg-light-darkPrimary">
                        <p className="text-3xl text-center text-gray-400 underline hover:text-gray-100 cursor-pointer ">Knowledge Hub Sanctuary</p>
                        <p className="text-gray-200 pt-10 text-justify">Journey into the realm of wisdom at our school library—where every page holds a universe waiting to be explored. Immerse yourself in knowledge, spark your curiosity, and unlock endless possibilities. From classic tales to modern adventures, our library is a haven for minds eager to learn. </p>
                        <div className="mt-10 flex justify-center">
                                <DefaultButton btnName={'Dive In Today'} />
                        </div>
                    </div>
                    <div className={`${HomeCss.applyBackImg}`}>

                    </div>
                </div>
            </div>

        </div>
    )
}




export default StudentLife;