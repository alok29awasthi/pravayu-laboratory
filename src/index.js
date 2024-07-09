import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EBrochure from './pages/EBrochure';
import Layout from './components/Layout'; // Import the Layout component

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
        path: "/e-brochure",
        element: <EBrochure />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);