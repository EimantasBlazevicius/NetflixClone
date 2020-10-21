import React, { useState } from "react";

const Payment = ({ onContinue }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [card, setCard] = useState("");
  // eslint-disable-next-line
  const [expiry, setExpiry] = useState("");
  // eslint-disable-next-line
  const [CVV, setCVV] = useState("");
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="float-left text-dark">
          Name
        </label>
        <input
          type="text"
          value={name}
          name="Name"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="float-left text-dark">
          Last Name
        </label>
        <input
          type="text"
          value={surname}
          name="LastName"
          className="form-control"
          id="LastName"
          placeholder="Last Name"
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="float-left text-dark">
          Card Number
        </label>
        <input
          type="text"
          value={card}
          name="card"
          className="form-control"
          id="card"
          placeholder="Card number"
          onChange={(e) => setCard(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={(e) => onContinue(e, name)}
        className="btn btn-danger m-2"
      >
        Sign In
      </button>
    </form>
  );
};

export default Payment;
