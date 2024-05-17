import React from "react";

export const Tile = (props) => {

  const { item } = props; // item represents an object being passed in from TileList

  const information = Object.values(item); /*the values method will return an array containing only the values of the properties of the object passed in as a prop in this case data which is item. Data has been passed down and had its mname changed but it's the contacts array of object. You can see the name change in ContactsPage.js
  
  We need only the values for the map method below to work*/

  //console.log(information); // Just a check to see if the the output of the values method is correct

  
  const renderedInfo = information.map((value, index) => {
    return <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>{value}</p>;
  });

  
  return (
    <div className="tile-container">
      {renderedInfo}     
    </div>
  );
};
