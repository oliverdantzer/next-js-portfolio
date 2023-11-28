import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";
import { Mode } from "@anatoliygatt/dark-mode-toggle";

interface ModeContextProps {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

const ModeContext = createContext<ModeContextProps | undefined>(undefined);

function ModeProvider(params: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("dark");
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {params.children}
    </ModeContext.Provider>
  );
}

function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { ModeProvider, useMode };
