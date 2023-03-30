import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home';
import Vehicles from './components/vehicles/Vehicles';
import Trip from "./components/trip/Trip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",s
        element: <Home />
      },
      {
        path: "vehicles",
        element: <Vehicles />
      }
    ]
        element: <Home />,
      },
      {
        path: "trips",
        element: <Trip />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
