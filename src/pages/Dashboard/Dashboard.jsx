import React, {

  useEffect,
  useState

} from "react";

import API from "../../services/api";

import {

  useNavigate

} from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);

  const [bookings, setBookings] = useState([]);

  const [favorites, setFavorites] = useState([]);

  /* FETCH DATA */

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      /* PROPERTIES */

      const propertiesRes = await API.get(
        "/properties"
      );

      setProperties(
        propertiesRes.data
      );

      /* BOOKINGS */

      const bookingsRes = await API.get(
        "/bookings"
      );

      setBookings(
        bookingsRes.data
      );

      /* FAVORITES */

      const favoritesRes = await API.get(
        "/favorites"
      );

      setFavorites(
        favoritesRes.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  /* TOTAL REVENUE */

  const totalRevenue = bookings.reduce(

    (total, booking) =>

      total + booking.amount,

    0

  );

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#0f172a",
        color:"#fff",
        padding:"30px"
      }}
    >

      {/* TOP */}

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"40px",
          flexWrap:"wrap",
          gap:"20px"
        }}
      >

        <div>

          <h1
            style={{
              fontSize:"42px"
            }}
          >

            Dashboard

          </h1>

          <p
            style={{
              color:"#94a3b8"
            }}
          >

            Welcome Back 👋

          </p>

        </div>

        <button
          onClick={() =>
            navigate("/add-property")
          }
          style={{
            background:"#2563eb",
            border:"none",
            color:"#fff",
            padding:"14px 24px",
            borderRadius:"14px",
            cursor:"pointer",
            fontSize:"16px"
          }}
        >

          + Add Property

        </button>

      </div>

      {/* STATS */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
          gap:"25px",
          marginBottom:"40px"
        }}
      >

        {/* CARD */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px"
          }}
        >

          <h3
            style={{
              color:"#94a3b8"
            }}
          >

            Properties

          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"15px"
            }}
          >

            {properties.length}

          </h1>

        </div>

        {/* CARD */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px"
          }}
        >

          <h3
            style={{
              color:"#94a3b8"
            }}
          >

            Bookings

          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"15px"
            }}
          >

            {bookings.length}

          </h1>

        </div>

        {/* CARD */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px"
          }}
        >

          <h3
            style={{
              color:"#94a3b8"
            }}
          >

            Favorites

          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"15px"
            }}
          >

            {favorites.length}

          </h1>

        </div>

        {/* CARD */}

        <div
          style={{
            background:"#1e293b",
            padding:"30px",
            borderRadius:"24px"
          }}
        >

          <h3
            style={{
              color:"#94a3b8"
            }}
          >

            Revenue

          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"15px"
            }}
          >

            ₹{totalRevenue}

          </h1>

        </div>

      </div>

      {/* RECENT PROPERTIES */}

      <div
        style={{
          background:"#1e293b",
          borderRadius:"24px",
          padding:"30px"
        }}
      >

        <h2
          style={{
            marginBottom:"25px"
          }}
        >

          Recent Properties

        </h2>

        {properties.length > 0 ? (

          properties.map((property) => (

            <div
              key={property._id}
              style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                padding:"20px",
                background:"#0f172a",
                borderRadius:"18px",
                marginBottom:"15px",
                flexWrap:"wrap",
                gap:"20px"
              }}
            >

              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"20px"
                }}
              >

                <img
                  src={
                    property.image
                  }
                  alt=""
                  style={{
                    width:"90px",
                    height:"90px",
                    objectFit:"cover",
                    borderRadius:"16px"
                  }}
                />

                <div>

                  <h3>
                    {property.title}
                  </h3>

                  <p
                    style={{
                      color:"#94a3b8"
                    }}
                  >

                    📍 {property.location}

                  </p>

                </div>

              </div>

              <h2>

                ₹{property.price}

              </h2>

            </div>

          ))

        ) : (

          <h3>
            No Properties Found
          </h3>

        )}

      </div>

    </div>

  );
};

export default Dashboard;