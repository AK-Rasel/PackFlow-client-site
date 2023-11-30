import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginAndRegester/Login";
import Register from "../Pages/LoginAndRegester/Register";




import Dashboard from "../mainLayout/Dashboard";
import UserProfile from "../Dashboard/User/UserProfile";

import MyBookParcel from "../Dashboard/User/MyBookParcel";
import BookParcel from "../Dashboard/User/BookParcel";

import DeliveryList from "../Dashboard/deliveryMan/DeliveryList";
import Reviews from "../Dashboard/deliveryMan/Reviews";

import PrivetRouter from "../Provider/PrivetRouter";
import Update from "../Dashboard/User/Update";
import AllParcels from "../Dashboard/Admin/AllParcels";
import AllUser from "../Dashboard/Admin/AllUser";
import AllDeliveryMen from "../Dashboard/Admin/AllDeliveryMen";
import Statistics from "../Dashboard/Admin/Statistics";

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
      element:<PrivetRouter><Dashboard/></PrivetRouter>,
      children:[
        // user
         {
        path:'myParcel',
        element:<PrivetRouter><MyBookParcel/></PrivetRouter>
      },
        {
        path:'myProfile',
        element:<PrivetRouter><UserProfile/></PrivetRouter>
      },
        {
        path:'bookParcel',
        element: <PrivetRouter><BookParcel/></PrivetRouter>
      },
        {
        path:'update/:id',
        element: <PrivetRouter><Update/></PrivetRouter>,
        loader:({params}) => fetch(`https://pack-flow-parcel-management-server.vercel.app/parcelBook/${params.id}`)

      },
      // Delivery Men
      
      {
        path:'myDeliveryList',
        element:<PrivetRouter><DeliveryList/></PrivetRouter>
      },
      {
        path:'myReviews',
        element:<PrivetRouter><Reviews/></PrivetRouter>
      },
      // Admin
      {
        path:'allParcels',
        element:<PrivetRouter><AllParcels/></PrivetRouter>
      },
      {
        path:'allUsers',
        element:<PrivetRouter><AllUser/></PrivetRouter>
      },
      {
        path:'allDeliveryMen',
        element:<PrivetRouter><AllDeliveryMen/></PrivetRouter>
      },
      {
        path:'statistics',
        element:<PrivetRouter><Statistics/></PrivetRouter>
      },

    ]
    },
  ]);
  export default router;