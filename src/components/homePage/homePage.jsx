import React, { useState, useEffect, useContext } from "react";
import Hero from "../hero/index";
import Card from "../card/index";
import UserContext from "../../context/userContext";

const HomePage = () => {
  const { isLoggedIn, token, apiEndpoint } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(apiEndpoint(token), {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setItems(res);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [token, apiEndpoint]);
  return (
    <div>
      {isLoggedIn ? null : <Hero />}
      <hr />
      <div className="body">
        <Card
          apiEndpoint={apiEndpoint}
          error={error}
          isLoaded={isLoaded}
          items={items}
        />
      </div>
    </div>
  );
};

export default HomePage;
