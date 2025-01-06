import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../hooks/UseAxios";
import Common_section from "../../Components/Common-section/Common_section";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const AxiosSecure = UseAxios();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/users");
      return res.data;
    }
  });

  const handelMakeAdmin =(user)=>{
    AxiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data);
        if (res.data.modifiedCount >0) {
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is a admin naw`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }


  const handelDelete=(user)=>{
     Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
    
            AxiosSecure.delete(`/users/${user._id}`)
            .then(res=>{
                console.log(res.data)
                
                if (res.data.deletedCount > 0) {
                  refetch()
                     Swal.fire({
                title: "Deleted!",
                text: "Item delete successfully.",
                icon: "success"
              });
                }
            })
            }
          });
  }

  return (
    <div className="">
        <Common_section
        heading={"MANAGE ALL USERS"}
        subHeading={"--- How many?? ---"}
      ></Common_section>
      <div className=" md:px-32 px-4">
        
        <h2 className=" text-3xl font-bold">Total Users:{users.length}</h2>
      </div>

      <div className="overflow-x-auto mt-4 md:px-32 px-4">
        <table className="table table-zebra ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index)=> <tr key={users?._id}>
                    <th>{index+1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                       {user.role==="admin"?
                       "Admin":
                         <button onClick={()=>handelMakeAdmin(user)} className="btn bg-[#D1A054] text-white text-xl"><FaUsers /></button>
                       }
                        
                        </td>
                    <td><button onClick={()=>handelDelete(user)} className="btn bg-red-800 text-white text-xl"><RiDeleteBin6Line /></button></td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
