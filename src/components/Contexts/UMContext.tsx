import React, { createContext, useState } from "react";
import UMEntity from "../../models/maintenance/UMEntity";

/**
 * This is the context that carries an UpcomingMaintenace entity
 * to the various components in the maintenance tree.
 */
type UMContextProps = {
  uMContext: UMEntity;
  setUMContext: (maintenance: UMEntity) => void;
};

const defaultUM = new UMEntity(-1);

const UMContext = createContext<UMContextProps>({
  uMContext: defaultUM,
  setUMContext: () => {},
});

type UMProviderProps = {
  children: React.ReactNode;
};

export const UMProvider = ({ children }: UMProviderProps) => {
  const [uMContext, setUMContext] = useState<UMEntity>(defaultUM);

  const setUM = (maintenance: UMEntity) => {
    setUMContext(maintenance);
  };

  return (
    <UMContext.Provider value={{ uMContext, setUMContext: setUM }}>
      {children}
    </UMContext.Provider>
  );
};

export default UMContext;
