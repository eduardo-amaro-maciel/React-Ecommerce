import { useState, createContext, ReactNode } from "react";

export type SidebarContextProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleClose: () => void;
};

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
}
