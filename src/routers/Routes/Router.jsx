import {
    createBrowserRouter,
     
  } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Menu from "../../pages/Menu/Menu/Menu";
import Order from "../../pages/Order/Order/Order";
import Login from "../../pages/login/Login";
import SingUp from "../../pages/singUp/SingUp";
import Secret from "../../shared/secret/Secret";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Dashboard from "../../layout/Dashboard";
import MyCard from "../../Dashboard/myCard/MyCard";
import AllUser from "../../Dashboard/AllUser/AllUser";
import AdminRouter from "../AdminRouter/AdminRouter";
import AddItem from "../../Dashboard/AddItem/AddItem";
import ManageItem from "../../Dashboard/ManageItem/ManageItem";
import Payment from "../../pages/Payment/Payment";
import AdminHome from "../../Dashboard/AdminHome/AdminHome";
import UserHome from "../../Dashboard/UserHome/UserHome";
import ManageBooking from "../../Dashboard/ManageBooking/ManageBooking";
import MyBooking from "../../Dashboard/MyBooking/MyBooking";
import AddReview from "../../Dashboard/AddReview/AddReview";
 
 
 
 
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
     
      children: [
        {
          path: "/",
          element:<Home></Home>  ,
          
        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path: '/order',
          element:<Order></Order>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/singUp',
          element:<SingUp></SingUp>
        },
        {
          path: '/secret',
          element:<PrivateRouter><Secret></Secret></PrivateRouter>
        }
      ],
   },
   {
     path: 'dashboard',
     element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
     children: [
       {
         path: 'myCard',
         element:<PrivateRouter><MyCard></MyCard></PrivateRouter>
       },
      //  user router
       {
         path: "userHome",
         element:<UserHome></UserHome>
       },
        {
        path: 'payment/:id',
          element: <Payment></Payment>,
        loader:({params})=>fetch(`https://bistro-boss-server-lemon-theta.vercel.app/carts/${params.id}`)
       },
       {
        path: 'myBooking',
        element:<MyBooking></MyBooking>
       },
       {
         path: "addReview",
         element:<AddReview></AddReview>
       },
      //  admin router
       {
         path: "adminHome",
         element:<AdminRouter><AdminHome></AdminHome></AdminRouter>
       },
      
       {
        path: 'allUser',
        element:<AdminRouter><AllUser></AllUser></AdminRouter>
       },
       {
         path: 'addItem',
         element:<AdminRouter><AddItem></AddItem></AdminRouter>
       },
       {
         path: 'manageItem',
         element:<AdminRouter><ManageItem></ManageItem></AdminRouter>
       },
       {
         path: "manageBooking",
         element:<AdminRouter><ManageBooking></ManageBooking></AdminRouter>
       }
     ]
   }
  ]);  