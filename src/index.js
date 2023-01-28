import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home';
import Commands from './pages/Commands';
import Ranks from './pages/Ranks';
import Warps from './pages/Warps';
import Systems from './pages/Systems';

const router = createBrowserRouter([
  {
    basename:"DragonPowerWiki",
    path:"/",
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "comandos",
        element: <Commands/>
      },
      {
        path: "ranks",
        element: <Ranks/>
      },
      {
        path: "warps",
        element: <Warps/>
      },
      {
        path: "systems",
        element: <Systems/>
      }
  ]
  }
], { basename: "/DragonPowerWiki" })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} basename={"DragonPowerWiki"}/>
  </React.StrictMode>
);