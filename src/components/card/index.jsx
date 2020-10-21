import React, { useContext } from "react";
import "../../App.css";
import loader from "./images/loading.gif";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";

function Card({ error, isLoaded, items }) {
  const { fav, setFav } = useContext(UserContext);
  function toggleFavorite(id) {
    fav.includes(id)
      ? setFav(fav.filter((item) => item !== id))
      : setFav(fav.concat(id));
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="row justify-content-center">
        <img className="img-fluid" src={loader} alt="Loading" />
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center">
        {items.map((item) => (
          <div className="col-2 card bg-secondary" key={item.id}>
            <Link to={"/products/" + item.id}>
              <img
                className="card-img-top"
                src={item.image}
                alt="Avengeeeers"
              />
            </Link>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <button
                className="btn btn-danger m-2 mt-auto"
                onClick={() => toggleFavorite(item.id)}
                aria-label="label"
              >
                {fav.includes(item.id) ? "Liked 💖" : "Favorite"}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Card;
