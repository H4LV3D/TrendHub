import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

const ModalLayout: React.FC<Props> = ({ children }) => {
  // Prevent the rest of the page from scrolling
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="backdrop-blur-sm grid place-items-center fixed z-40 top-0 left-0 min-h-screen max-h-screen w-screen overflow-y-scroll bg-black bg-opacity-80 py-4 px-4">
      {children}
    </div>
  );
};

export default ModalLayout;
