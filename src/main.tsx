import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home';
import Maintenance from './components/maintenance/Maintenance';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "maintenance",
        element: <Maintenance />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
          <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
