import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element:<HomePage></HomePage>,
        }
      ]
    },
  ]);

export default router;