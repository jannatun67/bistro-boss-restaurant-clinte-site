import { useEffect, useState } from "react";
import Common_section from "../../Components/Common-section/Common_section";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";


const PopularMenu = () => {
    const [menu, setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then( data => {
            const popularItem= data.filter(item=> item.category === ('popular'))
            setMenu(popularItem)
        })

    },[])
    return (
        <div className="w-11/12 mx-auto py-10">
            <Common_section
             heading={"FROM OUR MENU"}
             subHeading={"--- Check it out ---"}
            >
            </Common_section>
            <div className="grid md:grid-cols-2 gap-3 space-y-4">
                {
                    menu.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className="flex  justify-center mt-10">
                <button className="btn bg-white border-b-2 border-b-black">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;