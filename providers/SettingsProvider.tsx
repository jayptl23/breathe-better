import { createContext, PropsWithChildren, useContext, useState } from "react";

type SettingsType = {
  continuousMode: boolean;
  toggleContinuousMode: () => void;
};

const SettingsContext = createContext<SettingsType>({
  continuousMode: false,
  toggleContinuousMode: () => {},
});

export const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [continuousMode, setContinuousMode] = useState(false);

  const toggleContinuousMode = () => {
    setContinuousMode((prev) => !prev);
  };

  return (
    <SettingsContext.Provider value={{ continuousMode, toggleContinuousMode }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
