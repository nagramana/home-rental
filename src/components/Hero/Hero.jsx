import React from "react";
import "./Hero.css";

const Hero = () => {

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Find Your Perfect Home
        </h1>

        <p>
          Rent Flats, Apartments & Villas Without Brokers
        </p>

        {/* SEARCH BOX */}
        <div className="search-box">

          <input
            type="text"
            placeholder="Search city or locality"
          />

          <button>
            Search
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;