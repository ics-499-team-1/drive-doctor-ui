import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Maintenance from "./components/maintenance/Maintenance";
import AddUpcomingMaintenance from "./components/maintenance/UM/UMAdd";
import ConvertUpcoming from "./components/maintenance/ConvertUpcoming";
import UMEdit from "./components/maintenance/UM/UMEdit";
import Trip from "./components/trip/Trip";
import AddVehicle from "./components/vehicles/AddVehiclePage";
import VehiclesPage from "./components/vehicles/VehiclesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "vehicles",
        element: <VehiclesPage />,
      },
      {
        path: "maintenance",
        element: <Maintenance />,
      },
      {
        path: "maintenance/add",
        element: <AddUpcomingMaintenance />,
        },
        {
        path: "maintenance/convert",
        element: <ConvertUpcoming />,
        },
        {
        path: "maintenance/edit",
        element: <UMEdit />,
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
