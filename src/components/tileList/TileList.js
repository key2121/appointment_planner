import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  
  const { data } = props;
  let informationStore = data.map((item,index) => {
     return <Tile key={index} item={item} />;
  });
  
  return (
    <div>
     {informationStore}
    </div>
  );
};

