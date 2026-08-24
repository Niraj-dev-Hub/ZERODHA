import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5">
        <div className=" mt-5">
          <h3>The Zerodha Universe</h3>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-4  mt-5 p-5 text-muted">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="mt-3 ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>

          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "50%", marginTop: "20%" }}
          />
          <p className="mt-3 ">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 mt-5 p-5  text-muted">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="mt-3 ">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "50%", marginTop: "20%" }}
          />
          <p className="mt-3 ">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 mt-5 p-5  text-muted">
          <img
            src="media/images/tijori.svg"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="mt-3 ">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "50%", marginTop: "20%" }}
          />
          <p className="mt-3 ">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

 <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>

      </div>
    </div>
  );
}

export default Universe;
