import React, { useState } from "react";

const PickAPlan = ({ onContinue, plans }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <div className="card-deck mb-3 text-center">
        {plans.map((plan) => (
          <div key={plan.id} className="card mb-4 shadow-sm">
            <div className="card-header">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={() => setSelected(plan.id)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Pick the plan
                </label>
              </div>
              <h4 className="my-0 font-weight-normal">
                Total Cost: {plan.totalCost}
              </h4>
              <p>{plan.title}</p>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                ${plan.monthlyCost}{" "}
                <small className="text-muted">/ {plan.frequencyUnit}</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Billed every {plan.frequencyIntervalMonths}</li>
                <li>Unlimited access</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={(e) => onContinue(e, selected)}
        className="btn btn-danger m-2"
      >
        Continue
      </button>
    </div>
  );
};

export default PickAPlan;
