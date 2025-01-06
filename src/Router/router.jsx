import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Menu from "../Pages/menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LoginPage from "../Pages/Login/LoginPage";
import Register from "../Pages/Register/Register";
import DashBoard from "../LayOut/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Pages/DashBoard/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element:<HomePage></HomePage>,
        },
        {
          path: "/menu",
          element:<Menu></Menu>,
        },
       
        {
          path:'/order/:category',
          element:<Order></Order>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>,
        },
        // Admin rout
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        }
      ]
    },
    {
      path:"login",
      element:<LoginPage></LoginPage>
    },
    {
      path:"register",
      element:<Register></Register>
    }
  ]);

export default router;