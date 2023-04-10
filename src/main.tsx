import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Maintenance from "./components/maintenance/Maintenance";
import AddUpcomingMaintenance from "./components/maintenance/UM/UMAdd";
import AddVehicle from "./components/vehicles/AddVehiclePage";
import VehiclesPage from "./components/vehicles/VehiclesPage";
import UMAdd from "./components/maintenance/UM/UMAdd";
import Trip from "./components/trip/Trip";
import ConvertUpcoming from "./components/maintenance/UM/ConvertUpcoming";
import UMEdit from "./components/maintenance/UM/UMEdit";
import UMDelete from "./components/maintenance/UM/UMDelete";
import CMDelete from "./components/maintenance/CM/CMDelete";
import CMAdd from "./components/maintenance/CM/CMAdd";
import CMEdit from "./components/maintenance/CM/CMEdit";

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
        element: <UMAdd />,
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
        path: "maintenance/delete",
        element: <UMDelete />,
      },
      {
        path: "maintenance/CM/delete",
        element: <CMDelete />,
      },
      {
        path: "maintenance/CM/add",
        element: <CMAdd />,
      },
      {
      path: "maintenance/CM/edit",
      element: <CMEdit />,
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
