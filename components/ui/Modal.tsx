import ReactDOM from "react-dom";
import { useEffect } from "react";

type ModalProps = {
  close?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export const Backdrop: React.FC<ModalProps> = ({ close }) => {
  return <div className="backdrop" onClick={close}></div>;
};

const Modal: React.FC<ModalProps> = ({ close, children, className }) => {
  useEffect(() => {
    // Apply the 'stop-scroll' class to the body when the modal is open
    document.body.classList.add("stop-scroll");
    // Remove the 'stop-scroll' class when the modal is closed
    return () => {
      document.body.classList.remove("stop-scroll");
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={close} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}

      {ReactDOM.createPortal(
        <div className={`modal ${className && className}`}>{children}</div>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;
