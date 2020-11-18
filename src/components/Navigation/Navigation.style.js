import styled from "styled-components";
import palette from "../../util/styles/palette";
import { NavLink } from "react-router-dom";

const CategoryLink = styled.div`
  position: relative;
  width: 85%;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  min-width: 160px;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid ${palette.base_clor[5]};
  overflow-x: hidden;
  padding-top: 40px;

  a:hover {
    color: ${palette.base_clor[5]};
    text-decoration: none;
  }

  .logout {
    position: absolute;
    margin-right: 10px;
    right: 0;
  }
`;

// margin 으로 왜 안되지 ?
const CategoryLinkItem = styled(NavLink)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  background: ${palette.base_clor[0]};
  border: 1px solid ${palette.base_clor[0]};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &.active {
    background: ${palette.base_clor[5]};
    color: black;

    &:hover {
      color: white;
    }
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const ImageLogo = styled.div`
  right: 0;
  top: 0;
  position: absolute;
  float: right;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export { CategoryLinkItem, CategoryLink, ImageLogo };
