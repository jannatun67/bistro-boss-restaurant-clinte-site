
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import UseMenu from '../../../hooks/UseMenu';
import Common_section from '../../../Components/Common-section/Common_section';
import MenuCategory from '../MenuCategory/MenuCategory';
import Dessert from '../Dessert';
import Pizza from '../Pizza';
import Salad from '../Salad';
import Soup from '../Soup';



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
            {/* mean cover */}
           <Cover img={menuImg} title="Our Menu" paragraph="Would you like to try a dish?"></Cover>
            {/* offer */}
           <Common_section
           heading={"TODAY'S OFFER"}
           subHeading={"--- Don't miss ---"}
           ></Common_section>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <Dessert dessert={dessert}></Dessert>
            {/* pizza */}
            <Pizza pizza={pizza}></Pizza>
            {/* salad */}
            <Salad salad={salad}></Salad>
            {/* soup */}
            <Soup soup={soup}></Soup>
        </div>
    );
};

export default Menu;