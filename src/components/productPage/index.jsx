import React, { useState, useEffect, useContext } from "react";
import ModalVideo from "react-modal-video";
import UserContext from "../../context/userContext";

function ProductPage({ match }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const { token, fav, setFav } = useContext(UserContext);
  function toggleFavorite(id) {
    fav.includes(id)
      ? setFav(fav.filter((item) => item !== id))
      : setFav(fav.concat(id));
  }

  const productId = match.params.id;
  useEffect(() => {
    fetch(
      "https://academy-video-api.herokuapp.com/content/items/" + productId,
      {
        headers: {
          authorization: token,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setItem(res);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [token, productId]);

  const videoId = (item) => {
    if (item.video) {
      return item.video.replace("https://www.youtube.com/embed/", "");
    }
    return "i5qOzqD9Rms";
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container-fluid d-flex h-100 flex-column">
        <div className="row productPage">
          <div className="col-3">
            <img className="float-left img-fluid" src={item.image} alt="hero" />
          </div>
          <div className="col">
            <h1 className="color-white">{item.title}</h1>
            <p className="color-white">{item.description}</p>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={videoId(item)}
              onClose={() => setOpen(false)}
            />
            <button
              className="btn btn-danger m-2"
              onClick={() => setOpen(true)}
            >
              Watch
            </button>
            <button
              className="btn btn-danger m-2"
              onClick={() => toggleFavorite(item.id)}
              aria-label="label"
            >
              {fav.includes(item.id) ? "Liked 💖" : "Favorite"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
