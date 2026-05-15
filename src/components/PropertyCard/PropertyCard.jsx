import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ image, title, price, location }) => {

  return (
    <div className="property-card">

      <img
        src={image}
        alt={title}
      />

      <div className="property-info">

        <h3>{title}</h3>

        <p>{location}</p>

        <h2>{price}</h2>

        <button>
          View Details
        </button>

      </div>

    </div>
  );
};

export default PropertyCard;