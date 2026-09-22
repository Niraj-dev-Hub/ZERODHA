import React, { useEffect, useState } from "react";
import axios from "axios";

const Funds = () => {
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const [holdingsRes, positionsRes] = await Promise.all([
          axios.get("https://zerodha-backend-ucqv.onrender.com/allHoldings"),
          axios.get("https://zerodha-backend-ucqv.onrender.com/allPositions"),
        ]);

        setHoldings(holdingsRes.data || []);
        setPositions(positionsRes.data || []);
      } catch (error) {
        console.error("Account funds fetch failed:", error);
      }
    };

    fetchAccountData();
  }, []);

  const totalInvestment = holdings.reduce(
    (total, stock) => total + Number(stock.avg || 0) * Number(stock.qty || 0),
    0
  );
  const totalValue = holdings.reduce(
    (total, stock) => total + Number(stock.price || 0) * Number(stock.qty || 0),
    0
  );
  const pnl = totalValue - totalInvestment;
  const totalExposure = positions.reduce(
    (total, stock) => total + Number(stock.price || 0) * Number(stock.qty || 0),
    0
  );

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <button type="button" className="btn btn-green">
          Add funds
        </button>
        <button type="button" className="btn btn-blue">
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹{(totalValue * 0.12).toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹{(totalExposure * 0.2).toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">₹{(totalValue * 0.18).toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Investment</p>
              <p>₹{totalInvestment.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Current Value</p>
              <p>₹{totalValue.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>P&L</p>
              <p className={pnl >= 0 ? "profit" : "loss"}>₹{pnl.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>₹{totalExposure.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>₹{(totalValue * 0.1).toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>₹{(totalValue * 0.12 + totalExposure * 0.08).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <button type="button" className="btn btn-blue">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
