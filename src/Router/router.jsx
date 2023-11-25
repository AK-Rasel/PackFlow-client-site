import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginAndRegester/Login";
import Register from "../Pages/LoginAndRegester/Register";
import Dashboard from "../mainLayout/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [{
        path:'/',
        element:<Home/>
      }]
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    },
    {
      path:'dashboard',
      element:<Dashboard/>
    },
  ]);
  export default router;