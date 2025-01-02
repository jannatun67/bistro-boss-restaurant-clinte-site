import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const navigate=useNavigate()
    const{createUser,updateUser}=useContext(AuthContext)
  const {register,handleSubmit,reset,formState: { errors }} = useForm();


  const onSubmit = (data) => {
    console.log(data);
   createUser(data.email, data.password)
   .then(result =>{
    const loggedUser=result.user;
    console.log(loggedUser);
    updateUser(data.name,data.PhotoUrl)
    .then(() => {
      console.log("user profile info update");
      reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Profile Update SuccessFully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
    });
   })
   .catch(error =>{
    console.log(error);
   })
  };

  return (
   <div>
    <Helmet>
        <title>bistro boss/Sign Up</title>
    </Helmet>
     <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                
                {...register("PhotoUrl", { required: true })}
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
              {errors.PhotoUrl && (
                <span className="text-red-400">Photo Url is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                 
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">password is required</p>
              )}
               {errors.password?.type === "minLength" && (
                <p className="text-red-600">password must be 6 Characters</p>
              )}
               {errors.password?.type === "maxLength" && (
                <p className="text-red-600">password must be less then 20 Characters</p>
              )}
              
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054] text-white">Sign Up</button>
            </div>
            <p className="text-[#D1A054] text-center">
              <small>Already registered?</small>{" "}
              <Link to="/login">Go to log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Register;
