import styled from "styled-components";
import palette from "../../util/styles/palette";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.16);
`;
const ModalBody = styled.div`
  position: fixed;
  z-index: 3;
  margin: 5rem auto;
  left: 0;
  right: 0;
  width: 320px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  }

  p.title {
    font-size: 16pt;
    font-weight: bold;
    color: #333;
    display: flex;
    .ai {
      color: ${palette.base_clor[5]};
    }
  }

  .content {
    border-top: 1px solid #bebebe;
    margin-top: 16px;

    p {
      padding: 8px;
      font-size: 12pt;
      color: #999;
    }
  }
`;

const ModalButtonWrap = styled.div`
  margin: 0;
  margin-top: 8px;

  button {
    width: 100%;
    padding: 12px 0;
    background-color: ${palette.orange[7]};
    font-size: 13pt;
    color: white;
    border: 0;
    cursor: pointer;

    &:hover {
      background: ${palette.orange[4]};
    }

    &:active {
      background: coral;
    }
  }
`;

export { ModalButtonWrap, ModalBody, ModalOverlay };
