const FoodCard = ({ item }) => {
  const { name, recipe, image,price } = item;
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
            <button className="btn  border-b-4 border-0 border-[#BB8506] text-[#BB8506] uppercase">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
