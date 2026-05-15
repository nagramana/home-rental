import React, {

  useEffect,
  useState

} from "react";

import API from "../../services/api";

import "./Properties.css";

import {

  Link,
  useLocation

} from "react-router-dom";

const Properties = () => {

  const [properties, setProperties] = useState([]);

  const locationHook = useLocation();

  useEffect(() => {

    fetchProperties();

  }, [locationHook.search]);

  const fetchProperties = async () => {

    try {

      const res = await API.get(

        `/properties/search/filter${locationHook.search}`

      );

      setProperties(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  /* ADD FAVORITE */

  const addFavorite = async (id) => {

    try {

      await API.post(

        "/favorites",

        {
          propertyId:id
        }

      );

      alert(
        "❤️ Added To Favorites"
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="properties-page">

      <h1>
        Search Properties
      </h1>

      <div className="properties-grid">

        {properties.map((property) => (

          <div
            className="property-card"
            key={property._id}
          >

            <img
              src={property.image}
              alt=""
            />

            <div className="property-info">

              <h2>
                {property.title}
              </h2>

              <p>
                📍 {property.location}
              </p>

              <h3>
                ₹{property.price}
              </h3>

              <div
                style={{
                  display:"flex",
                  gap:"10px",
                  marginTop:"20px"
                }}
              >

                <Link
                  to={`/property/${property._id}`}
                  style={{
                    flex:1
                  }}
                >

                  <button
                    style={{
                      width:"100%"
                    }}
                  >

                    View Details

                  </button>

                </Link>

                <button
                  onClick={() =>
                    addFavorite(property._id)
                  }
                  style={{
                    background:"#ef4444",
                    color:"#fff",
                    border:"none",
                    padding:"12px 18px",
                    borderRadius:"10px",
                    cursor:"pointer"
                  }}
                >

                  ❤️ Save

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Properties;