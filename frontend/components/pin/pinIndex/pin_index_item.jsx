import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => (
  <li className="pin-index-items">
    <Link to={`/pins/${pin.id}`}>
      <span> Title: { pin.title } </span>
      <img src={pin.image_url} alt={pin.title} />
      <span> Descritption: {pin.description }</span>
    </Link>
  </li>
);// end PinIndexItem

export default PinIndexItem;
