import React, { createContext, useState } from "react";
import CMEntity from "./CMEntity";

/**
 * Used as a global context for CMEntities in the maintenance tree.
 */
type CMContextProps = {
  cMContext: CMEntity;
  setCMContext: (maintenance: CMEntity) => void;
};

const defaultMaintenance = new CMEntity(-1);

const CMContext = createContext<CMContextProps>({
  cMContext: defaultMaintenance,
  setCMContext: () => {},
});

type CMProviderProps = {
  children: React.ReactNode;
};

export const CMProvider = ({ children }: CMProviderProps) => {
  const [cMContext, setcompletedMaintenanceContext] =
    useState<CMEntity>(defaultMaintenance);

  const setCMContext = (maintenance: CMEntity) => {
    setcompletedMaintenanceContext(maintenance);
  };

  return (
    <CMContext.Provider value={{ cMContext, setCMContext }}>
      {children}
    </CMContext.Provider>
  );
};

export default CMContext;
