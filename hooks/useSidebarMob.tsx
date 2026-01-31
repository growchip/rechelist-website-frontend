"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SidebarContextType = {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => setSideBarOpen((prev) => !prev);
  const openSidebar = () => setSideBarOpen(true);
  const closeSidebar = () => setSideBarOpen(false);

  return (
    <SidebarContext.Provider
      value={{ sideBarOpen, toggleSidebar, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
