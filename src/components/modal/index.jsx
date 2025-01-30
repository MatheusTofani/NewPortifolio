// src/components/modal/index.jsx
import React from "react";
import { ModalBackground, ModalContent } from "./style";
const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
