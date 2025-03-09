import { useState } from "react";

import { ModalContext } from "./modalContext";

export function ModalContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(<></>);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        content,
        setContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
