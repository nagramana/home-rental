import React from "react";

const Reviews = () => {

  const reviews = [

    {
      id:1,
      name:"Ram",
      review:"Excellent Property"
    },

    {
      id:2,
      name:"Kiran",
      review:"Very good location"
    }

  ];

  return (

    <div style={{ marginTop:"40px" }}>

      <h2>
        Reviews
      </h2>

      {reviews.map((item) => (

        <div
          key={item.id}
          style={{
            padding:"20px",
            border:"1px solid #ddd",
            marginTop:"15px",
            borderRadius:"10px"
          }}
        >

          <h3>
            {item.name}
          </h3>

          <p>
            {item.review}
          </p>

        </div>

      ))}

    </div>

  );
};

export default Reviews;