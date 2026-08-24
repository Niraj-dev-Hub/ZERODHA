import React from "react";

function Stats() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row mb-5 mt-5">
        <div className="col-6">
          <h1 className="fs-2  mb-5">Trust with confidence</h1>
          <h2 className=" fs-4 ">Customer-first always</h2>
          <p className=" text-muted ">
            That's why 1.3+ crore customres trust Zerodha with $3.5+ <br />
            lakh crores worth of equality investmensts
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className=" text-muted ">
            {" "}
            No gimmicks, spam, "gamfication", or annoying push <br />
            notifications. High quality apps that you use at your pace, the{" "}
            <br />
            way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className=" text-muted ">
            {" "}
            Not just an app, but a whole ecosystem. Our investments in
            <br /> 30+ fintech startup offer you tailored services specific to{" "}
            <br /> your needs.
          </p>
          <h2 className=" fs-4">Do better with money</h2>
          <p className=" text-muted ">
            {" "}
            With initiatives like Nudge and kill swithch, we doNot just an app,
            but a whole ecosystem. Our investments in n't just
            <br /> faciliate transactions, but actively help you do better with{" "}
            <br /> your Money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosytem Image"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a 
            href="#" 
            className="mx-5"
            style={{textDecoration:"none"}}
            >
              Explore our products
              <i className="fa fa-long-arrow-right"></i>
            </a>
            <a 
            href="#"
            style={{textDecoration:"none"}}
            >Try kite demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
