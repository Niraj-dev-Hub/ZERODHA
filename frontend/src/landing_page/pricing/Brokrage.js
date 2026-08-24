import React from "react";

function Brokrage() {
  return (
    <div className="container  mt-5 border-top">
      <div className="row mt-5">
        <div className="col-8 ">
          <a href="">
            {" "}
            <h3 className="fs-5 "
             style={{marginLeft:"20%"}}
            >Brokrage Calculator</h3>
          </a>
          <ul className="text-muted mt-5">
            <li>
              <p>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </p>
            </li>
            <li>
              <p>Digital contract notes will be sent via e-mail</p>
            </li>
            <li>
              <p>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </p>
            </li>
            <li>
              <p>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </p>
            </li>
          </ul>
        </div>
        <div className="col-4 ">
          <a href="">
            {" "}
            <h3 className="fs-5 ">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
