import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import Posts from "./views/Posts/Posts"
import ReadPost from "./views/ReadPost/ReadPost"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/posts',
        element:<Posts />
    },
    // id is called as param
    {
        path:'posts/read/:id',
        element:<ReadPost />
    },
    {
        path:'*',
        element:<h1>404 Not Found</h1>
    }
])




root.render(<RouterProvider router={router} />);


