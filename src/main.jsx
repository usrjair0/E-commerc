import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './views/home/Home';
import Login from './views/login/Login.jsx';
import Products from './views/Products/Products';
import App from './views/pay/Pay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: < Login/>,
  },
  
  {
    path: "/products/:productid",
    element: <Products />,
  },
  {
    path: "/pay/:payid",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
