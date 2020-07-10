import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./Navigation.scss";
import styled from "styled-components";
import palette from "../../util/styles/palette";

const categories = [
  {
    name: "statistics",
    text: "Progress Stats",
  },
  {
    name: "",
    text: "File Upload",
  },
  {
    name: "excelinfo",
    text: "View Upload File",
  },
  {
    name: "compoundinfo",
    text: "Compound Info",
  },
];

const CategoryLink = styled(NavLink)`
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

const Navigation = () => {
  return (
    <div>
      <div className="sidenav">
        {categories.map((c) => (
          <CategoryLink
            key={c.name}
            exact={c.name}
            to={
              c.name === "Progress Stats"
                ? "/kmapinfo/statistics"
                : `/kmapinfo/${c.name}`
            }
          >
            {c.text}
          </CategoryLink>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Navigation);
