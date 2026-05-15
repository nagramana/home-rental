import React, {

  useEffect,
  useState

} from "react";

import API from "../../services/api";

const MyProperties = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {

    fetchProperties();

  }, []);

  const fetchProperties = async () => {

    try {

      const res = await API.get(
        "/properties"
      );

      setProperties(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const deleteProperty = async (id) => {

    try {

      await API.delete(
        `/properties/${id}`
      );

      fetchProperties();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{ padding:"50px" }}>

      <h1>
        My Properties
      </h1>

      {properties.map((property) => (

        <div
          key={property._id}
          style={{
            border:"1px solid #ddd",
            padding:"20px",
            marginTop:"20px",
            borderRadius:"10px"
          }}
        >

          <h2>
            {property.title}
          </h2>

          <p>
            {property.location}
          </p>

          <h3>
            ₹{property.price}
          </h3>

          <button
            onClick={() =>
              deleteProperty(property._id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );
};

export default MyProperties;