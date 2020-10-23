import React, { useState } from "react";
import "./register.css";
import CreateUser from "./components/createUser";
import PickAPlan from "./components/pickAPlan";
import Payment from "./components/payment";
import axios from "axios";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const [navactive, setNavactive] = useState(1);
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState("");

  async function handleContinue1(e, email, password1, password2) {
    e.preventDefault();
    if (password1 !== password2) {
      setError("Passwords do not match ");
    } else {
      setEmail(email);
      setPassword(password1);

      try {
        const { data } = await axios.get(
          "https://academy-video-api.herokuapp.com/sales/plans"
        );
        setPlans(data);
      } catch (ex) {}

      setNavactive(2);
      history.push("/register/reg2");
    }
  }

  function handleContinue2(e, selectedPlan) {
    e.preventDefault();
    setPlan(selectedPlan);
    setNavactive(3);

    history.push("/register/reg3");
  }

  async function Submit(e, name) {
    e.preventDefault();

    const body = { username: name, password: password, planId: plan };
    try {
      const { data } = await axios.post(
        "https://academy-video-api.herokuapp.com/auth/signup",
        body
      );
      console.log(data);
      dispatch({type: "UPDATE_TOKEN",payload: {
        token: data.token
      }});
      history.replace("/");
    } catch (ex) {}
  }
  return (
    <div className="min-vh-100 container justify-content-center">
      <div className="row reg-header">
        <div className="col-4">
          <button
            className={
              navactive === 1
                ? "sub-nav-item p-2 active-step"
                : "sub-nav-item p-2"
            }
          >
            Create User
          </button>
        </div>
        <div className="col-4">
          <button
            className={
              navactive === 2
                ? "sub-nav-item p-2 active-step"
                : "sub-nav-item p-2"
            }
          >
            Pick a Plan
          </button>
        </div>
        <div className="col-4">
          <button
            className={
              navactive === 3
                ? "sub-nav-item p-2 active-step"
                : "sub-nav-item p-2"
            }
          >
            Payment
          </button>
        </div>
      </div>
      <div id="row content-reg">
        <div className="col-12 bg-secondary color-white">
          <Switch>
            <Route
              exact
              path="/register/"
              render={() => <CreateUser onContinue={handleContinue1} />}
            />
            <Route
              path="/register/reg2"
              render={() => (
                <PickAPlan plans={plans} onContinue={handleContinue2} />
              )}
            />
            <Route
              path="/register/reg3"
              render={() => <Payment onContinue={Submit} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Register;
