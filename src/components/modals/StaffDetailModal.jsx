import { IoMdCloseCircle } from "react-icons/io";
import StaffDetail from '../../data/FacultyDetailData/FacultyDetails.json';





const StaffDetailModal = ({visible, onCloseModal, staffDetailId}) =>{
    if(!visible)
    {
        return null;
    }

    

    const staffFilter = StaffDetail.find(staff => staff.id == staffDetailId);

    
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className=" bg-white relative rounded-lg p-4 w-full max-w-2xl max-h-full overflow-hidden">
                <div className="flex justify-between">
                    <span className="font-medium text-xl">{staffFilter.designation}</span>
                    <button onClick={onCloseModal}><IoMdCloseCircle size={26}/></button>
                </div>
                <div className="py-8 justify-center flex">
                    <img src={staffFilter.profile} className=" h-60 rounded" alt={staffFilter.designation} />
                </div>
                <div  className="grid grid-cols-2 gap-6 px-32">
                        <div className="font-medium text-xl flex flex-col">
                        <span className="py-2">Name:</span>
                        <span className="py-2">Designation:</span>
                        <span className="py-2">Role:</span>
                        <span className="py-2">Email:</span>
                        </div>

                        <div className="font-thin text-xl flex flex-col">
                        <span className="py-2">{staffFilter.name}</span>
                        <span className="py-2">{staffFilter.designation}</span>
                        <span className="py-2">{staffFilter.role}</span>
                        <span className="py-2">{staffFilter.email}</span>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}






export default StaffDetailModal;