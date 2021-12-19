import React from 'react';
import MenuBar from '../../MenuBar/MenuBar';
import AvailableClocks from '../AvailableClocks/AvailableClocks';
import ExploreProductsBanner from '../ExploreProductsBanner/ExploreProductsBanner';

const ExploreProducts = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <ExploreProductsBanner></ExploreProductsBanner>
      <AvailableClocks></AvailableClocks>
    </div>
  );
};

export default ExploreProducts;