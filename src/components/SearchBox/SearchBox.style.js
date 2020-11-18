import styled from "styled-components";
import palette from "../../util/styles/palette";

const SearchBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  input {
    outline: none !important;
    border: 1px solid ${palette.base_clor[1]};
    font-size: 1.5rem;
    padding: 10px;
    width: 25rem;
  }

  .search-btn {
    outline: none !important;
    border: 1px solid ${palette.base_clor[3]};
    background: ${palette.base_clor[3]};
    font-size: 1.5rem;
    padding: 12px;
    color: white;
  }

  div {
    width: 63%;
    border: 1px solid ${palette.base_clor[2]};
    overflow-y: scroll;
    height: 500px;
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
