import { useState } from "react";
import orderCover from "../../../assets/shop/contact/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../hooks/UseMenu";

import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories=["salad","pizza","soup","dessert","drinks"]
  const {category} = useParams();
  console.log(category);
  const initialIndex=categories.indexOf(category)
  const [TabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();

// console.log(category);
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
        <Helmet>
            <title>bistro Boss/Order Food</title>
        </Helmet>
      <Cover
        img={orderCover}
        title="Order Food"
        paragraph="Would you like to try a dish?"
      ></Cover>

      <div className="w-11/12 mx-auto py-10 ">
        <Tabs defaultIndex={TabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
