import React, {

  useEffect,
  useState

} from "react";

import API from "../../services/api";

const AdminDashboard = () => {

  const [properties, setProperties] = useState([]);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  /* FETCH DATA */

  const fetchData = async () => {

    try {

      /* PROPERTIES */

      const propertyRes = await API.get(
        "/properties"
      );

      setProperties(
        propertyRes.data
      );

      /* BOOKINGS */

      const bookingRes = await API.get(
        "/bookings"
      );

      setBookings(
        bookingRes.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  /* APPROVE PROPERTY */

  const approveProperty = async (id) => {

    try {

      await API.put(

        `/properties/approve/${id}`

      );

      alert(
        "✅ Property Approved"
      );

      fetchData();

    } catch (error) {

      console.log(error);

    }

  };

  /* DELETE PROPERTY */

  const deleteProperty = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this property?"
    );

    if(!confirmDelete){

      return;

    }

    try {

      await API.delete(
        `/properties/${id}`
      );

      alert(
        "✅ Property Deleted"
      );

      fetchData();

    } catch (error) {

      console.log(error);

      alert(
        "❌ Delete Failed"
      );

    }

  };

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#0f172a",
        color:"#fff",
        padding:"30px"
      }}
    >

      {/* TITLE */}

      <h1
        style={{
          fontSize:"42px",
          marginBottom:"40px"
        }}
      >

        Admin Dashboard

      </h1>

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

          <h3>
            Total Properties
          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"20px"
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

          <h3>
            Total Bookings
          </h3>

          <h1
            style={{
              fontSize:"42px",
              marginTop:"20px"
            }}
          >

            {bookings.length}

          </h1>

        </div>

      </div>

      {/* PROPERTY LIST */}

      <div
        style={{
          background:"#1e293b",
          padding:"30px",
          borderRadius:"24px"
        }}
      >

        <h2
          style={{
            marginBottom:"25px"
          }}
        >

          Manage Properties

        </h2>

        {properties.length > 0 ? (

          properties.map((property) => (

            <div
              key={property._id}
              style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                background:"#0f172a",
                padding:"20px",
                borderRadius:"18px",
                marginBottom:"15px",
                flexWrap:"wrap",
                gap:"20px"
              }}
            >

              {/* LEFT */}

              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"20px"
                }}
              >

                <img
                  src={
                    property.image ||
                    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop"
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

                  <h2
                    style={{
                      marginTop:"10px"
                    }}
                  >

                    ₹{property.price}

                  </h2>

                  <p
                    style={{
                      marginTop:"10px",
                      color:
                        property.approved
                        ? "#22c55e"
                        : "#f59e0b"
                    }}
                  >

                    {property.approved
                      ? "Approved"
                      : "Pending Approval"}

                  </p>

                </div>

              </div>

              {/* BUTTONS */}

              <div
                style={{
                  display:"flex",
                  gap:"12px",
                  flexWrap:"wrap"
                }}
              >

                {!property.approved && (

                  <button

                    onClick={() =>
                      approveProperty(
                        property._id
                      )
                    }

                    style={{
                      background:"#16a34a",
                      color:"#fff",
                      border:"none",
                      padding:"12px 20px",
                      borderRadius:"10px",
                      cursor:"pointer"
                    }}
                  >

                    Approve

                  </button>

                )}

                <button
                  style={{
                    background:"#2563eb",
                    color:"#fff",
                    border:"none",
                    padding:"12px 20px",
                    borderRadius:"10px",
                    cursor:"pointer"
                  }}
                >

                  View

                </button>

                <button
                  onClick={() =>
                    deleteProperty(
                      property._id
                    )
                  }
                  style={{
                    background:"#ef4444",
                    color:"#fff",
                    border:"none",
                    padding:"12px 20px",
                    borderRadius:"10px",
                    cursor:"pointer"
                  }}
                >

                  Delete

                </button>

              </div>

            </div>

          ))

        ) : (

          <h2>
            No Properties Found
          </h2>

        )}

      </div>

    </div>

  );
};

export default AdminDashboard;