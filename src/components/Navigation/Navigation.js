import React from "react";
import { withRouter } from "react-router-dom";
import { CategoryLinkItem, CategoryLink, ImageLogo } from "./Navigation.style";
import image from "../../util/image/logo.png";

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

const Navigation = () => {
  return (
    <div>
      <CategoryLink>
        {categories.map((c) => (
          <CategoryLinkItem
            key={c.name}
            exact={c.name}
            to={
              c.name === "Progress Stats"
                ? "/kmapinfo/statistics"
                : `/kmapinfo/${c.name}`
            }
          >
            {c.text}
          </CategoryLinkItem>
        ))}
        <ImageLogo>
          <img src={`/kmapinfo/${image}`} alt="" width="100" height="40" />
        </ImageLogo>
      </CategoryLink>
    </div>
  );
};

export default withRouter(Navigation);
