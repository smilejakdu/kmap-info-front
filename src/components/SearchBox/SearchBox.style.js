import styled from "styled-components";
import palette from "../../util/styles/palette";

const SearchBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  input {
    border: 1px solid ${palette.blue[7]};
    font-size: 1.5rem;
    padding: 10px;
    width: 25rem;
  }

  .search-btn {
    border: 1px solid ${palette.blue[7]};
    background: ${palette.blue[7]};
    font-size: 1.5rem;
    padding: 12px;
    color: white;
  }

  div {
    width: 63%;
    border: 1px solid ${palette.blue[2]};
    overflow-y: scroll;
    overflow: hidden;
    padding: 12px;
    z-index: 1;
    background: white;
    position: absolute;
  }

  h6 {
    font-size: 20px;
    padding: 8px;

    &:hover {
      cursor: pointer;
      color: coral;
    }
  }
`;

export { SearchBorder };
