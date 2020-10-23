import React, { useState, useEffect } from "react";
import Hero from "../hero/index";
import Card from "../card/index";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const isLoggedIn = useSelector(store => store.isLoggedIn)
  const token = useSelector(store => store.token)
  const apiEndpoint = useSelector(store => store.apiEndpoint)

  useEffect(() => {
    fetch(apiEndpoint, {
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
