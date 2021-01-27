import React from "react";
import { ModalBody, ModalOverlay, ModalButtonWrap } from "./Modal.style";

const Modal = ({ isOpen, close, text }) => {
  // close , isOpen 각각 boolean 을 받게 되고 거기에 따라서 open close 된다.
  return (
    <>
      {isOpen ? (
        <div>
          <ModalOverlay onClick={close} />
          <ModalBody>
            <p className="title">
              K<p className="ai">ai</p>
              Pharm
            </p>
            <div className="content">
              <p>{text}</p>
            </div>
            <ModalButtonWrap>
              <button onClick={close}>확인</button>
            </ModalButtonWrap>
          </ModalBody>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
