import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/home/Home';
import Login from './views/login/Login.jsx';
import Products from './views/Products/Products';
import Pay from './views/pay/Pay';
import { PRODUCTS_MOCK } from './mock/Products.mock'; //forma de importar sem ser a default

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
