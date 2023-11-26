import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginAndRegester/Login";
import Register from "../Pages/LoginAndRegester/Register";




import Dashboard from "../mainLayout/Dashboard";
import UserProfile from "../Dashboard/User/UserProfile";
import UserHome from "../Dashboard/User/UserHome";
import MyBookParcel from "../Dashboard/User/MyBookParcel";
import BookParcel from "../Dashboard/User/BookParcel";
import DeliveryManHome from "../Dashboard/deliveryMan/DeliveryManHome";
import DeliveryList from "../Dashboard/deliveryMan/DeliveryList";
import Reviews from "../Dashboard/deliveryMan/Reviews";
// import UserRoute from "../Provider/PrivetRouter";
import PrivetRouter from "../Provider/PrivetRouter";
import Update from "../Dashboard/User/Update";

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
          path:'userHome',
        element:<UserHome/>
        }
       , {
        path:'myParcel',
        element:<MyBookParcel/>
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
        element: <Update/>,
        loader:({params}) => fetch(`http://localhost:5000/parcelBook/${params.id}`)

      },
      // Delivery Men
      {
        path:'deliveryMenHome',
        element:<DeliveryManHome/>
      },
      {
        path:'myDeliveryList',
        element:<DeliveryList/>
      },
      {
        path:'myReviews',
        element:<Reviews/>
      },
      // Admin
      {
        path:'myReviews',
        element:<Reviews/>
      },

    ]
    },
  ]);
  export default router;