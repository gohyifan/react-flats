import React from 'react';
import flats from './flats';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {flats.map(flat => (
        <Flat
          key={flats.indexOf(flat)}
          id={flats.indexOf(flat)}
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          selectFlat={props.selectFlat}
        />))}
    </div>
  );
};

export default FlatList;
