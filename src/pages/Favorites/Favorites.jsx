import React, {

  useEffect,
  useState

} from "react";

import API from "../../services/api";

import "./Favorites.css";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    fetchFavorites();

  }, []);

  /* FETCH FAVORITES */

  const fetchFavorites = async () => {

    try {

      const res = await API.get(
        "/favorites"
      );

      setFavorites(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  /* REMOVE FAVORITE */

  const removeFavorite = async (id) => {

    try {

      await API.delete(
        `/favorites/${id}`
      );

      fetchFavorites();

      alert(
        "Favorite Removed"
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="favorites-page">

      <h1>
        Saved Properties
      </h1>

      <div className="favorites-grid">

        {favorites.length > 0 ? (

          favorites.map((item) => (

            <div
              className="favorite-card"
              key={item._id}
            >

              <img
                src={
                  item.property?.image ||
                  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop"
                }
                alt=""
              />

              <div className="favorite-content">

                <h2>
                  {item.property?.title}
                </h2>

                <p>
                  📍 {item.property?.location}
                </p>

                <h3>
                  ₹{item.property?.price}
                </h3>

                <button
                  onClick={() =>
                    removeFavorite(item._id)
                  }
                >

                  Remove Favorite

                </button>

              </div>

            </div>

          ))

        ) : (

          <div
            style={{
              width:"100%",
              textAlign:"center",
              marginTop:"50px"
            }}
          >

            <h2>
              No Favorites Added
            </h2>

          </div>

        )}

      </div>

    </section>

  );
};

export default Favorites;