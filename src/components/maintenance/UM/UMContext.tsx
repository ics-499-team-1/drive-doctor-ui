import React, { createContext, useState } from "react";
import UMEntity from "./UMEntity";

type UMContextProps = {
  upcomingMaintenanceContext: UMEntity;
  setMaintenance: (maintenance: UMEntity) => void;
};

const defaultMaintenance = new UMEntity();

const UMContext = createContext<UMContextProps>({
  upcomingMaintenanceContext: defaultMaintenance,
  setMaintenance: () => {},
});

type UMProviderProps = {
  children: React.ReactNode;
};

export const UpcomingMaintenanceProvider = ({
  children,
}: UMProviderProps) => {
  const [upcomingMaintenanceContext, setUpcomingMaintenanceContext] =
    useState<UMEntity>(defaultMaintenance);

  const setMaintenance = (maintenance: UMEntity) => {
    setUpcomingMaintenanceContext(maintenance);
  };

  return (
    <UMContext.Provider
      value={{ upcomingMaintenanceContext, setMaintenance }}
    >
      {children}
    </UMContext.Provider>
  );
};

export default UMContext;
