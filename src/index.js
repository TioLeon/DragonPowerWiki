import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from '/pages/Home';
import DragonBlock from '/pages/DragonBlock'
import NarutoC from '/pages/NarutoC'
import Commands from '/pages/Commands';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "dbc",
        element: <DragonBlock/>
      },
      { 
        path: "nc",
        element: <NarutoC/>
      },
      {
        path: "comandos",
        element: <Commands/>
      },
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);