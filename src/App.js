import React, { useState } from "react";
import "./App.css";
import "react-modal-video/scss/modal-video.scss";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import HomePage from "./components/homePage/homePage";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login/login";
import Nav from "./components/nav";
import Footer from "./components/footer/index";
import Register from "./components/register/register";
import ProductPage from "./components/productPage/index";
import UserContext from "./context/userContext";

function App() {
  let history = useHistory();
  const [token, setToken] = useState("");
  const [fav, setFav] = useState([]);

  const isLoggedIn = (token) => (token === "" ? false : true);

  const apiEndpoint = (isLoggedIn) => {
    return !isLoggedIn
      ? "https://academy-video-api.herokuapp.com/content/free-items"
      : "https://academy-video-api.herokuapp.com/content/items";
  };

  async function handleLogin(e, user, pass) {
    e.preventDefault();
    const obj = { username: user, password: pass };
    try {
      const { data } = await axios.post(
        "https://academy-video-api.herokuapp.com/auth/login",
        obj
      );
      setToken(data.token);
      history.replace("/");
    } catch (ex) {
      setToken("false");
    }
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn(token),
        token: token,
        onLogin: handleLogin,
        apiEndpoint: apiEndpoint,
        setToken: setToken,
        fav: fav,
        setFav: setFav,
      }}
    >
      <div className="content">
        <header className="header">
          <Nav
            onSignOut={() => {
              setToken("");
              history.replace("/");
            }}
          />
        </header>
        <Switch>
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" exact component={HomePage}></Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
