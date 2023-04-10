import React, { createContext, useState } from "react";
import VehicleEntity from "./VehicleEntity";

/**
 * This is the context for the currently selected Vehicle.
 * Used in the maintneance tree for UMEntity and CMEntity lists, as well
 * as a vehicleID for adding to the DB.
 */
type VehicleContextProps = {
  vehicleContext: VehicleEntity;
  setVehicle: (vehicle: VehicleEntity) => void;
};

const defaultVehicle = new VehicleEntity(-1, [], []);

const VehicleContext = createContext<VehicleContextProps>({
  vehicleContext: defaultVehicle,
  setVehicle: () => {},
});

type VehicleProviderProps = {
  children: React.ReactNode;
};

export const VehicleProvider = ({
  children,
}: VehicleProviderProps) => {
  const [vehicleContext, setVehicleContext] =
    useState<VehicleEntity>(defaultVehicle);

  const setVehicle = (vehicle: VehicleEntity) => {
    setVehicleContext(vehicle);
  };

  return (
    <VehicleContext.Provider
      value={{ vehicleContext, setVehicle }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleContext;
