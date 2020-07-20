import React from "react";
import { withRouter } from "react-router-dom";
import { CategoryLinkItem, CategoryLink, ImageLogo } from "./Navigation.style";
import image from "../../util/image/logo.png";
import ipk from "../../util/image/ipk.jpg";

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
              c.name === "Compound Info"
                ? "/kmapinfo/compoundinfo"
                : `/kmapinfo/${c.name}`
            }
          >
            {c.text}
          </CategoryLinkItem>
        ))}

        <CategoryLinkItem to={"/kmapinfo/compoundinfo"}>
          Compound Info
        </CategoryLinkItem>

        <ImageLogo>
          <img src={`/kmapinfo/${image}`} alt="" width="300" height="50" />
          <img src={`/kmapinfo/${ipk}`} alt="" width="100" height="70" />
        </ImageLogo>
      </CategoryLink>
    </div>
  );
};

export default withRouter(Navigation);
