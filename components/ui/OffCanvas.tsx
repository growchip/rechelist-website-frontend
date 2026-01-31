import { useEffect, useState } from "react";

type OffCanvasProps = {
  close: () => void;
  offcanvas: boolean;
  children: React.ReactNode;
  className?: string;
};

const OffCanvas: React.FC<OffCanvasProps> = ({
  close,
  offcanvas,
  children,
  className,
}) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Set screen check once on mount
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (offcanvas) {
      document.body.classList.add("stop-scroll");
    } else {
      document.body.classList.remove("stop-scroll");
    }
    return () => {
      document.body.classList.remove("stop-scroll");
    };
  }, [offcanvas]);

  return (
    <>
      {isMobile && offcanvas && (
        <div className="backdrop" onClick={close}></div>
      )}
      <div
        className={`off-canvas ${className} ${
          offcanvas ? " transform-none" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default OffCanvas;
