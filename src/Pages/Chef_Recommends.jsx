import Common_section from "../Components/Common-section/Common_section";
import img from "../assets/home/slide5.jpg";

const Chef_Recommends = () => {
  return (
    <div className="w-11/12 mx-auto pb-10">
      <Common_section
        heading={"CHEF RECOMMENDS"}
        subHeading={"--- Should Try ---"}
      ></Common_section>
     <div className=" grid md:grid-cols-3 gap-4">
     <div className="card bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-[400px] w-[400px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn bg-white uppercase text-[#BB8506] border-b-[#BB8506]">add to cart</button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-[400px] w-[400px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn bg-black uppercase text-[#BB8506] ">add to cart</button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-[400px] w-[400px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn bg-white uppercase text-[#BB8506] border-b-[#BB8506]">add to cart</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Chef_Recommends;
