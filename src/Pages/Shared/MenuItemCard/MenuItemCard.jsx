

const MenuItemCard = ({item}) => {
    const{name,recipe,image,price}=item
    return (
        <div>
           <div className="flex gap-3  ">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px] h-[100px] object-cover " src={image} alt="" />
            <div className="space-y-2">
                <h1 className="text-2xl font-medium uppercase">{name}........</h1>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <div className="text-[#BB8506]">
                ${price}
            </div>
           </div>
        </div>
    );
};

export default MenuItemCard;