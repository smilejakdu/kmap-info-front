import React from "react";
import { ModalBody, ModalOverlay, ButtonWrap } from "./Modal.style";

const Modal = ({ isOpen, close }) => {
  return (
    <>
      {isOpen ? (
        <div>
          <ModalOverlay onClick={close} />
          <ModalBody>
            <p className="title">Kai Pharm</p>
            <div className="content">
              <p>처음데이터입니다.</p>
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
