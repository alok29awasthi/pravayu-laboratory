import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Layout from './components/Layout';
import Gallery from './pages/Gallery/Gallery';

const router = createHashRouter([
  {
    element: <Layout />, // Use Layout as the parent element
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);