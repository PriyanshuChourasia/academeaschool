import { useState } from "react";
import AboutDetailButton from "../buttons/AboutDetailButton";
import StaffDetailModal from "../modals/StaffDetailModal";





const AboutStaff = () => {


    const [showDetail, setShowDetail] = useState(false);
    const [staffId, setStaffId] = useState(0);

    const showStaffDetail = (id) =>{
        setStaffId(id);
        if(showDetail)
        {
            setShowDetail(false);
        }
        else if(!showDetail)
        {
            setShowDetail(true);
        }
    }

    const closeModal = () => setShowDetail(false);


    const staffName = [
        {
            "id": 1,
            "name": "Samir Ram",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 2,
            "name": "Priya Sharma",
            "designation": "Vice-Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 3,
            "name": "Anika Desai",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 4,
            "name": "Deepak Verma",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 5,
            "name": "Siddharth Gupta",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 6,
            "name": "Karthik Menon",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 7,
            "name": "Vikram Khanna",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 8,
            "name": " Sanjay Rao",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 9,
            "name": "Maya Iyer",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 10,
            "name": "Aarti Guptar",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 11,
            "name": " Rohit Verma",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 12,
            "name": "Priyanka Mehra",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 13,
            "name": "Shreya Rajput",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
        {
            "id": 14,
            "name": "Vikrant Singhania",
            "designation": "Principal",
            "email": "info@gmail.com",
            "contact": "1234567890"
        },
    ];





    return (
        <div className="py-12">
            <h1 className="uppercase text-center text-6xl font-bold text-light-darkPrimary">Faculty Directory</h1>
            <div className="py-6 px-52 flex justify-center">
                <p className="text-justify text-lg font-thin">"Teachers and staff are the architects of knowledge, the builders of dreams, and the unsung heroes shaping the future. In the classrooms of today, they cultivate the leaders, thinkers, and innovators of tomorrow, laying the foundation for a world enriched by wisdom, compassion, and endless possibilities."</p>
            </div>
            <div className="px-24 py-12 flex flex-wrap justify-center">
                {
                    staffName.map((staff) => (
                        <div key={staff.id} className="py-8 w-64 transition-all ease-in-out duration-300 hover:rounded-lg hover:border hover:shadow-medium cursor-pointer">
                            <p className="text-3xl text-center">{staff.name}</p>
                            <p className="font-thin text-lg text-center pb-12">{staff.designation}</p>
                            <p className="font-thin text-lg text-center">{staff.email}</p>
                            <p className="font-thin text-lg text-center">{staff.contact}</p>
                            <div className="py-4 justify-center flex">
                                <AboutDetailButton btnName={'View Details'} onShowModal={() =>showStaffDetail(staff.id)} />
                            </div>

                        </div>
                    ))
                }
            </div>

            <StaffDetailModal visible={showDetail} onCloseModal={closeModal} staffDetailId={staffId} />

        </div>
    )
}




export default AboutStaff;