import React, { createContext, useState } from "react";
import UMEntity from "./UMEntity";

type UMContextProps = {
  upcomingMaintenanceContext: UMEntity;
  setMaintenance: (maintenance: UMEntity) => void;
};

const defaultMaintenance = new UMEntity();

const UpcomingMaintenanceContext = createContext<UMContextProps>({
  upcomingMaintenanceContext: defaultMaintenance,
  setMaintenance: () => {},
});

type UpcomingMaintenanceProviderProps = {
  children: React.ReactNode;
};

export const UpcomingMaintenanceProvider = ({
  children,
}: UpcomingMaintenanceProviderProps) => {
  const [upcomingMaintenanceContext, setUpcomingMaintenanceContext] =
    useState<UMEntity>(defaultMaintenance);

  const setMaintenance = (maintenance: UMEntity) => {
    setUpcomingMaintenanceContext(maintenance);
  };

  return (
    <UpcomingMaintenanceContext.Provider
      value={{ upcomingMaintenanceContext, setMaintenance }}
    >
      {children}
    </UpcomingMaintenanceContext.Provider>
  );
};

export default UpcomingMaintenanceContext;
