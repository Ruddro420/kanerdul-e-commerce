import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Cart from "./pages/Cart.jsx";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext.jsx";
import Checkout from "./pages/Checkout.jsx";
import Account from "./pages/Account.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";

// Create router configuration using createBrowserRouter
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
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/category/:id",
        element: <CategoryProduct />,
      },
      {
        path: "/account",
        element: <PrivateRoute><Account /></PrivateRoute>,
      },
      {
        path: "/order-success",
        element: <PrivateRoute><OrderSuccess /></PrivateRoute>,
      },

    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <CartProvider>
        <Toaster />
      </CartProvider>
    </RouterProvider>
  </StrictMode>
);
