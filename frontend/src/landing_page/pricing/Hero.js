import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row text-center mt-5 ">
        <h3>Charges</h3>
        <p className="text-muted fs-5">List of all charges and taxes</p>

        <div className="col-4  mt-5 ">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <h3 className="mt-3 fs-4">Free equity delivery</h3>
          <p
            className="text-muted mt-4 "
            style={{ width: "80%", marginLeft: "13%" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4  mt-5 ">
          <img
            src="media/images/other-trades.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <h3 className="mt-3 fs-4">Free equity delivery</h3>
          <p
            className="text-muted mt-4 "
            style={{ width: "80%", marginLeft: "13%" }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4  mt-5 ">
          <img
            src="media/images/pricingMF.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <h3 className="mt-3 fs-4">Free equity delivery</h3>
          <p
            className="text-muted mt-4 "
            style={{ width: "80%", marginLeft: "13%" }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
