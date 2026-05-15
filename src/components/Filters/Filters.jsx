import React, {

  useState

} from "react";

import { useNavigate } from "react-router-dom";

import "./Filters.css";

const Filters = () => {

  const navigate = useNavigate();

  const [location, setLocation] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {

    navigate(

      `/properties?location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}`

    );

  };

  return (

    <section className="filters">

      <div className="filters-box">

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value)
          }
        />

        <button
          onClick={handleSearch}
        >

          Search

        </button>

      </div>

    </section>

  );
};

export default Filters;