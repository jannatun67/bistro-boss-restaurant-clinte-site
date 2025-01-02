import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAxios from "../hooks/UseAxios";
import UseCart from "../hooks/UseCart";


const FoodCard = ({ item }) => {
  const{user}=useContext(AuthContext)
  const navigate=useNavigate()
  const AxiosSecure= UseAxios()
  const [,refetch]= UseCart()
  const { name, recipe, image,price,_id } = item;

  const handelAddToCart=(food)=>{
  
    if (user && user?.email) {
      const cartItem ={
        menuId:_id,
        email:user?.email,
        name,
        image,
        price
      }
      AxiosSecure.post('/carts',cartItem)
      .then(res=> {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch  cart to update the card item the count
          refetch()
        }
      })
    }
    else{
      Swal.fire({
        title: "You ar5e Logged In",
        text: "Please login to add to cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate("/login")
        }
      });
    }
  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-4 top-4  px-4 bg-black text-white">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=> handelAddToCart(item)}
            className="btn  border-b-4 border-0 border-[#BB8506] text-[#BB8506] uppercase">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
