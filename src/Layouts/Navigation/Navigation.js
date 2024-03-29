import React from 'react';
import { withRouter } from 'react-router-dom';
import { CategoryLinkItem, CategoryLink, ImageLogo } from './Navigation.style';
import image from '../../util/image/logo.png';
import ipk from '../../util/image/ipk.jpg';

const categories = [
  {
    name: 'statistics',
    text: 'Data Chart',
  },
  {
    name: 'upload',
    text: 'Programming select',
  },
  {
    name: 'excelinfo',
    text: 'User View',
  },
];
const Navigation = () => {
  // Header 부분 
  return (
    <div>
      <CategoryLink>
        {categories.map((c) => (
          <CategoryLinkItem
            key={c.name}
            exact={c.name}
            to={
              c.name === 'Compound Info'
                ? '/kmapinfo/compoundinfo'
                : `/kmapinfo/${c.name}`
            }
          >
            {c.text}
          </CategoryLinkItem>
        ))}

        <CategoryLinkItem to={'/kmapinfo/compoundinfo'}>
          Compound Info
        </CategoryLinkItem>

        <ImageLogo>
          <img src={`/kmapinfo/${image}`} alt="" height="70" />
          <img src={`${ipk}`} alt="" height="70" />
        </ImageLogo>
      </CategoryLink>
    </div>
  );
};

export default withRouter(Navigation);
