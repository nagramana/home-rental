import React, { useState } from "react";

import API from "../../services/api";

const AddProperty = () => {

  const [formData, setFormData] = useState({

    title:"",
    description:"",
    price:"",
    location:""

  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);

    data.append("description", formData.description);

    data.append("price", formData.price);

    data.append("location", formData.location);

    data.append("image", image);

    try {

      const res = await API.post(
        "/properties",
        data
      );

      alert("Property Added");

      console.log(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Add Property</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />

          <input
            type="file"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
          />

          <button type="submit">
            Add Property
          </button>

        </form>

      </div>

    </div>

  );
};

export default AddProperty;