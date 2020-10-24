import React, { useState } from "react";
import "./login.css";
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory()
  const token = useSelector(store => store.token)
  const dispatch = useDispatch()
  const [username, setUsermane] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e, user, pass) {
    e.preventDefault()
    const body = { username: user, password: pass};
    try {
      const {data} = await axios.post(
        "https://academy-video-api.herokuapp.com/auth/login",
        body
      );
      dispatch({type: "UPDATE_TOKEN",payload: {
        token: data.token
      }});
      history.replace("/");
    } catch (ex) {
      console.log(ex)
    }
  }

  const authOk = (token) => {
    if (token === "false") {

      return (
        <div className="alert alert-danger" role="alert">
          Check your username or password for Logging in!
        </div>
      );
    }
  };

  return (
    <section id="cover" className="min-vh-100">
      <div id="cover-caption">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <div className="px-2">
                <form>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="float-left text-dark"
                    >
                      Username
                    </label>
                    <input
                      type="username"
                      value={username}
                      name="username"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Username"
                      onChange={(e) => setUsermane(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="float-left text-dark"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {authOk(token)}
                  <button
                    type="button"
                    onClick={(e) => handleLogin(e,username,password)}
                    className="btn btn-danger m-2"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
