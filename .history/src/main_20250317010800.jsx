import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Single from './pages/Single.jsx';
import MainLayout from './layout/MainLayout.jsx';

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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollRestoration/>
    <RouterProvider router={router} />
  </StrictMode>,
)
