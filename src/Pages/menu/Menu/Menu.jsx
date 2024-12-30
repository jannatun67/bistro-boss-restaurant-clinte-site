
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import UseMenu from '../../../hooks/UseMenu';
import Common_section from '../../../Components/Common-section/Common_section';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
   const [menu]=UseMenu()
   const offered=menu.filter(item=> item.category === "offered")
   const dessert=menu.filter(item=> item.category === "dessert")
   const soup=menu.filter(item=> item.category === "soup")
   const salad=menu.filter(item=> item.category === "salad")
   const pizza=menu.filter(item=> item.category === "pizza")

    return (
        <div>
           <Helmet>
            <title>Bistro Boss/Menu</title>
           </Helmet>

           <Cover img={menuImg} title="Our Menu" paragraph="Would you like to try a dish?"></Cover>
           <Common_section
           heading={"TODAY'S OFFER"}
           subHeading={"--- Don't miss ---"}
           ></Common_section>
            <MenuCategory items={offered}></MenuCategory>
        </div>
    );
};

export default Menu;