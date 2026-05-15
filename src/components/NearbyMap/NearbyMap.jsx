import React from "react";

import {

  MapContainer,
  TileLayer,
  Marker,
  Popup

} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const NearbyMap = () => {

  /* DUMMY PROPERTY DATA */

  const properties = [

    {
      id:1,
      title:"Luxury Villa",
      location:[17.3850, 78.4867]
    },

    {
      id:2,
      title:"Modern Apartment",
      location:[17.3950, 78.4967]
    },

    {
      id:3,
      title:"Premium Flat",
      location:[17.3750, 78.4767]
    }

  ];

  return (

    <div
      style={{
        height:"100vh",
        background:"#0f172a",
        padding:"30px"
      }}
    >

      <h1
        style={{
          color:"#fff",
          marginBottom:"30px",
          fontSize:"42px"
        }}
      >

        Nearby Properties

      </h1>

      <div
        style={{
          borderRadius:"24px",
          overflow:"hidden"
        }}
      >

        <MapContainer

          center={[17.3850, 78.4867]}

          zoom={12}

          style={{
            height:"80vh",
            width:"100%"
          }}
        >

          <TileLayer

            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

          />

          {properties.map((property) => (

            <Marker

              key={property.id}

              position={property.location}

            >

              <Popup>

                {property.title}

              </Popup>

            </Marker>

          ))}

        </MapContainer>

      </div>

    </div>

  );
};

export default NearbyMap;