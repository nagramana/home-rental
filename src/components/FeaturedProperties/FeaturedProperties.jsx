import React from "react";
import "./FeaturedProperties.css";

import PropertyCard from "../PropertyCard/PropertyCard";

const FeaturedProperties = () => {

  const properties = [

    {
      id:1,
      image:"https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2074",
      title:"Luxury Apartment",
      location:"Hyderabad",
      price:"₹25,000/month"
    },

    {
      id:2,
      image:"https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070",
      title:"Modern Villa",
      location:"Bangalore",
      price:"₹45,000/month"
    },

    {
      id:3,
      image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080",
      title:"Family House",
      location:"Chennai",
      price:"₹30,000/month"
    }

  ];

  return (

    <section className="featured">

      <h1>
        Featured Properties
      </h1>

      <div className="featured-grid">

        {properties.map((property) => (

          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
          />

        ))}

      </div>

    </section>
  );
};

export default FeaturedProperties;
