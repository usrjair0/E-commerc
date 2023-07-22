import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/home/Home';
import Login from './views/login/Login.jsx';
import Products from './views/Products/Products';
import Pay from './views/pay/Pay';
import { PRODUCTS_MOCK } from './mock/Products.mock'

const router = createBrowserRouter([
  {
    path: "https://e-commerc-blue.vercel.app/",
    element: <Login />, 
  },
  {
    path: "https://e-commerc-blue.vercel.app/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "https://e-commerc-blue.vercel.app/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "https://e-commerc-blue.vercel.app/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
