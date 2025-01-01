import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Menu from "../Pages/menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LoginPage from "../Pages/Login/LoginPage";

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
      path:"login",
      element:<LoginPage></LoginPage>
    }
  ]);

export default router;