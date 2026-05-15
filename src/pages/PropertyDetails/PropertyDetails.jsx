import React, {

  useEffect,
  useState

} from "react";

import {

  useParams

} from "react-router-dom";

import API from "../../services/api";

import "./PropertyDetails.css";

/* COMPONENTS */

import GoogleMap from "../../components/GoogleMap/GoogleMap";

import Reviews from "../../components/Reviews/Reviews";

import Recommendations from "../../components/Recommendations/Recommendations";

const PropertyDetails = () => {

  const { id } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {

    fetchProperty();

  }, []);

  const fetchProperty = async () => {

    try {

      const res = await API.get(
        `/properties/${id}`
      );

      setProperty(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  if(!property){

    return <h1>Loading...</h1>;

  }

  return (

    <section className="details">

      <img
        src={property.image}
        alt=""
      />

      <div className="details-content">

        <h1>
          {property.title}
        </h1>

        <h2>
          ₹{property.price}
        </h2>

        <p>
          {property.description}
        </p>

        <h3>
          📍 {property.location}
        </h3>

        <button>
          Contact Owner
        </button>

        {/* GOOGLE MAP */}

        <GoogleMap
          location={property.location}
        />

        {/* REVIEWS */}

        <Reviews />

        {/* AI RECOMMENDATIONS */}

        <Recommendations />

      </div>

    </section>

  );
};

export default PropertyDetails;