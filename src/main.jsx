import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import User from './Components/Users/User';
import Details from './Components/Details/Details';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostsDetails/PostDetails';
import ErrorPage from './Components/Errorpage/ErrorPage';


const router = createBrowserRouter([
  
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/user',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:'/user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Details></Details>
      },
      {
        path:'/posts',
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`) ,
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
