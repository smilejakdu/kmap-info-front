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
  margin-top: 2rem;
  z-index: 1;
  min-width: 160px;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid coral;
  overflow-x: hidden;
  padding-top: 20px;

  a:hover {
    color: black;
    text-decoration: none;
  }

  .logout {
    position: absolute;
    margin-right: 10px;
    right: 0;
  }
`;

const CategoryLinkItem = styled(NavLink)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  background: ${palette.gray[3]};
  border: 1px solid green;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &.active {
    background: coral;
    color: black;

    &:hover {
      color: white;
    }
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
