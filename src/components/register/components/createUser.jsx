import React, { useState } from "react";

const CreateUser = ({ onContinue }) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="float-left text-dark">
          Email
        </label>
        <input
          type="email"
          value={email}
          name="username"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="float-left text-dark">
          Password
        </label>
        <input
          type="password"
          value={password1}
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="float-left text-dark">
          Repeat Password
        </label>
        <input
          type="password"
          value={password2}
          name="password"
          className="form-control"
          id="exampleInputPassword2"
          placeholder="Password"
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={(e) => onContinue(e, email, password1, password2)}
        className="btn btn-danger m-2"
      >
        Sign In
      </button>
    </form>
  );
};

export default CreateUser;
