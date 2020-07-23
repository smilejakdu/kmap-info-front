import React from "react";
import { ModalBody, ModalOverlay, ButtonWrap } from "./Modal.style";

const Modal = ({ isOpen, close, text }) => {
  return (
    <>
      {isOpen ? (
        <div>
          <ModalOverlay onClick={close} />
          <ModalBody>
            <p className="title">Kai Pharm</p>
            <div className="content">
              <p>{text}.</p>
            </div>
            <ButtonWrap>
              <button onClick={close}>Confirm</button>
            </ButtonWrap>
          </ModalBody>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
