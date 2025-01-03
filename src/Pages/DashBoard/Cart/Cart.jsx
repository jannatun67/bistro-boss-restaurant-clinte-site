import { RiDeleteBin6Line } from "react-icons/ri";
import Common_section from "../../../Components/Common-section/Common_section";
import UseCart from "../../../hooks/UseCart";
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";

const Cart = () => {
  const [cart,refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const AxiosSecure = UseAxios()
    // console.log(AxiosSecure);

  const handelDelete= (id)=>{
    // console.log(id);
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

        AxiosSecure.delete(`http://localhost:5000/carts/${id}`)
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
    <div>
      <Common_section
        heading={"WANNA ADD MORE?"}
        subHeading={"--- My Cart ---"}
      ></Common_section>
      <div className="flex justify-evenly ">
        <h2 className="text-2xl font-semibold">Total orders:{cart.length}</h2>
        <h2 className="text-2xl font-semibold">total price: ${totalPrice}</h2>
        <button className="btn bg-[#D1A054] text-white">Pay</button>
      </div>

      <div className="overflow-x-auto mt-4 px-32">
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
            </tr>
          </thead>
          <tbody>
           {
            cart.map((item,index) =>  <tr key={item._id}>
                <th>
                 {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                {item?.name}
                </td>
                <td>${item?.price}</td>
                <th>
                  <button onClick={()=>handelDelete(item?._id)} className="btn  bg-red-800 text-white text-xl"><RiDeleteBin6Line /></button>
                </th>
              </tr>)
           }
           
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Cart;
