import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Trip from "./components/trip/Trip";
import AddVehicle from "./components/vehicles/AddVehiclePage";
import VehiclesPage from "./components/vehicles/VehiclesPage";
import Login from "./components/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "vehicles",
        element: <VehiclesPage />,
      },
      {
        path: "trips",
        element: <Trip />,
      },
      {
        path: "vehicles/add",
        element: <AddVehicle />,
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
