import React from "react";

const AIRecommendations = () => {

  /* DUMMY AI DATA */

  const recommendations = [

    {
      id:1,
      title:"Luxury Villa",
      location:"Hyderabad",
      price:"₹45,000",
      image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop"
    },

    {
      id:2,
      title:"Modern Apartment",
      location:"Bangalore",
      price:"₹32,000",
      image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
    },

    {
      id:3,
      title:"Premium Flat",
      location:"Mumbai",
      price:"₹55,000",
      image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
    }

  ];

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
          marginBottom:"40px"
        }}
      >

        <h1
          style={{
            fontSize:"42px",
            marginBottom:"10px"
          }}
        >

          AI Recommendations

        </h1>

        <p
          style={{
            color:"#94a3b8",
            fontSize:"18px"
          }}
        >

          Smart Property Suggestions For You

        </p>

      </div>

      {/* GRID */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",
          gap:"30px"
        }}
      >

        {recommendations.map((property) => (

          <div
            key={property.id}
            style={{
              background:"#1e293b",
              borderRadius:"24px",
              overflow:"hidden",
              boxShadow:
              "0 10px 25px rgba(0,0,0,0.2)"
            }}
          >

            <img
              src={property.image}
              alt=""
              style={{
                width:"100%",
                height:"240px",
                objectFit:"cover"
              }}
            />

            <div
              style={{
                padding:"25px"
              }}
            >

              <h2
                style={{
                  marginBottom:"10px"
                }}
              >

                {property.title}

              </h2>

              <p
                style={{
                  color:"#94a3b8",
                  marginBottom:"15px"
                }}
              >

                📍 {property.location}

              </p>

              <h3
                style={{
                  marginBottom:"20px"
                }}
              >

                {property.price}

              </h3>

              <button
                style={{
                  width:"100%",
                  background:"#2563eb",
                  color:"#fff",
                  border:"none",
                  padding:"14px",
                  borderRadius:"14px",
                  cursor:"pointer",
                  fontSize:"16px"
                }}
              >

                View Property

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default AIRecommendations;