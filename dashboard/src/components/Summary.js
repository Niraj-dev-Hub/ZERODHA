import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const { data } = await axios.get("https://zerodha-backend-ucqv.onrender.com/allHoldings");
        setHoldings(data || []);
      } catch (error) {
        console.error("Summary holdings fetch failed:", error);
      }
    };

    fetchHoldings();
  }, []);

  const investment = holdings.reduce(
    (total, stock) => total + Number(stock.avg || 0) * Number(stock.qty || 0),
    0
  );
  const currentValue = holdings.reduce(
    (total, stock) => total + Number(stock.price || 0) * Number(stock.qty || 0),
    0
  );
  const pnl = currentValue - investment;
  const pnlPercent = investment ? (pnl / investment) * 100 : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{(currentValue * 0.12).toFixed(2)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>₹{(currentValue * 0.08).toFixed(2)}</span>{" "}
            </p>
            <p>
              Opening balance <span>₹{(currentValue * 0.12).toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              ₹{pnl.toFixed(2)} <small>{pnlPercent >= 0 ? "+" : ""}{pnlPercent.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{currentValue.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>₹{investment.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
