import { useContext, useEffect } from "react";

import { ModalContext } from "../../context/modalContext";

import "./Modal.css";

function Modal() {
  const { isOpen, setIsOpen, content } = useContext(ModalContext);

  useEffect(() => {
    function modalEscapeKeyDown(event) {
      if (isOpen) {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      }
    }

    document.addEventListener("keydown", modalEscapeKeyDown);

    return () => {
      document.removeEventListener("keydown", modalEscapeKeyDown);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return;

  return (
    <div className="modal-container" onClick={() => setIsOpen(false)}>
      <div
        className="modal-content-wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Modal;
