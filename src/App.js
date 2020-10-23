import React from "react";
import "./App.css";
import "react-modal-video/scss/modal-video.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login/login";
import Nav from "./components/nav";
import Footer from "./components/footer/index";
import Register from "./components/register/register";
import ProductPage from "./components/productPage/index";
//new setup for Redux
function App() {
  
  // onSignOut={}() => {
  //   setToken("");
  //   history.replace("/");
  // }

  return (
      <div className="content">
        <header className="header">
          <Nav/>
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
  );
}

export default App;
