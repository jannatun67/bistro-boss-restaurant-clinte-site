import { RiDeleteBin6Line } from "react-icons/ri";
import Common_section from "../../Components/Common-section/Common_section";
import UseMenu from "../../hooks/UseMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxios from "../../hooks/UseAxios";
import { Link } from "react-router-dom";


const ManageItems = () => {
  const [menu,loading,refetch]=UseMenu()
  const AxiosSecure = UseAxios()

  const handelDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await AxiosSecure.delete(`/menu/${item?._id}`)
        console.log(res.data);
       
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    });
  } 

  const handelEditItem = ()=>{

  }
    return (
        <div>
             <Common_section
        heading={"MANAGE ALL ITEMS"}
        subHeading={"---Hurry Up!---"}
      ></Common_section>
      <div className=" md:px-32">
        <h2 className="text-2xl font-semibold">Total items:</h2>
      </div>
      <div className="overflow-x-auto mt-4 md:px-32">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054] text-white">
      <tr>
      <th>
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index) => <tr key={item._id} >
          <th>
            {index+1}
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={item?.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              
            </div>
          </td>
          <td>
           {item?.name}
           
          </td>
          <td>${item?.price}</td>
          <th>
            <Link to={`/dashboard/UpdateItem/${item?._id}`}>
            <button onClick={()=> handelEditItem()} className="btn  bg-[#D1A054] text-white text-xl"><FaRegEdit /></button>
            </Link>
          </th>
          <th>
            <button onClick={()=> handelDeleteItem(item)} className="btn  bg-red-800 text-white text-xl"><RiDeleteBin6Line /></button>
          </th>
        </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageItems;