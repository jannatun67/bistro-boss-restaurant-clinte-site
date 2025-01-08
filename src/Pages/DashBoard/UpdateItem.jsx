import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAxios from "../../hooks/UseAxios";
import Swal from "sweetalert2";

const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateItem = () => {
    const {name,category, recipe,price,_id}= useLoaderData()
    // console.log(loader);
     const {register,handleSubmit, reset,formState: { errors }} = useForm();
     const AxiosSecure= UseAxios()
     const axiosPublic= UseAxiosPublic()

     const onSubmit =async (data) => {
         // console.log(data);
           const imageFile = data.image[0]
           // console.log(imageFile);
           const formData=new FormData()
           formData.append("image",imageFile)
        //    console.log(formData.get("image"));
         const res = await axiosPublic.post(image_hosting_api,formData)
     
         if (res.data.success) {
           const menuItem={
             name:data.name,
             category:data.category,
             price:parseFloat(data.price),
             recipe:data.recipe,
             image:res.data.data.display_url
           }
     
           const menuRes= await AxiosSecure.patch(`/menu/${_id}`,menuItem)

        //    console.log(menuRes.data);
           if (menuRes.data.modifiedCount > 0) {
            //  reset()
             Swal.fire({
               position: "top-end",
               icon: "success",
               title:`${data.name} is Updated to the menu`,
               showConfirmButton: false,
               timer: 1500
             });
           }
         }
         // console.log(res.data);
       };
    return (
      <div>
        <h2 className="text-center text-3xl my-10">UPDATE ITEM</h2>
           <div className="my-4 md:px-32">
                <div className=" bg-gray-200 p-6 rounded-lg">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label>Recipe name*</label>
                    <br />
                    <input
                      {...register("name",{required:true})}
                      type="text"
                      defaultValue={name}
                      placeholder="Recipe name"
                      className="input input-bordered w-full  mb-3 "
                    />
        
                    <div className="flex gap-3">
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Category*</span>
                        </div>
                        <select
                        value={category}
                        defaultValue="default"
                          {...register("category",{required:true})}
                          className="select select-bordered  w-full "
                        >
                          <option disabled value="default">
                            Select A Category?
                          </option>
                          <option>Salad</option>
                          <option>Pizza</option>
                          <option>Soup</option>
                          <option>Dessert</option>
                          <option>Drinks</option>
                        </select>
                      </label>
        
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Price*</span>
                        </div>
                        <input
                          type="text"
                          defaultValue={price}
                          {...register("price",{required:true})}
                          placeholder="price"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                    <label className="form-control">
                      <div className="label">
                        <span className="label-text">Recipe Details*</span>
                      </div>
                      <textarea
                      defaultValue={recipe}
                      {...register("recipe",{required:true})}
                        className="textarea textarea-bordered h-24"
                        placeholder="recipe details"
                      ></textarea>
                    </label>
                    <div>
            <input {...register("image",{required:true})} type="file" className="file-input  w-full max-w-xs my-4" /><br />
            </div>
                   
                    <div className=" flex justify-center mt-2">
                    <button className="btn bg-[#D1A054] text-white">Update Recipe Details </button>
                    </div>
                    
                  </form>
                </div>
              </div>
      </div>
    );
};

export default UpdateItem;