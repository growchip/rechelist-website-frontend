"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  showModal: boolean;
  toggleModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const closeModal = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ showModal, toggleModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return context;
};
