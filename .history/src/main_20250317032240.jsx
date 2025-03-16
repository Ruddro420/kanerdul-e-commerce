import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Single from './pages/Single.jsx';
import MainLayout from './layout/MainLayout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Cart from './pages/Cart.jsx';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './CartContext.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single/:id",
        element: <Single />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </StrictMode>,
  </CartProvider>

)
