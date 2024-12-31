import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/dessert-bg.jpeg'
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";

const Dessert = ({dessert}) => {
    return (
        <div>
             <Cover img={menuImg} title="DESSERTS" paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>

            <div className="w-11/12 mx-auto py-10">
            <div className="grid md:grid-cols-2 gap-3 space-y-4">
                {
                   dessert.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className="flex  justify-center mt-10">
                <button className="btn bg-white border-b-2 border-b-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            </div>
            
        </div>
    );
};

export default Dessert;