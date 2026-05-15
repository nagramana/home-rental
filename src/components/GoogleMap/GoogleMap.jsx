import React from "react";

const GoogleMap = ({ location }) => {

  return (

    <div
      style={{
        width:"100%",
        height:"400px",
        marginTop:"40px"
      }}
    >

      <iframe
        title="map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{
          border:0,
          borderRadius:"15px"
        }}
        src={`https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        allowFullScreen
      />

    </div>

  );
};

export default GoogleMap;