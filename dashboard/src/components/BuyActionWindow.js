import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import { watchList } from "../data/data";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const formRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, startY: 0 });
  const { closeBuyWindow } = useContext(GeneralContext);

  const stockMeta = watchList.find((stock) => stock.name === uid) || {
    name: uid,
    price: 0,
    percent: "0.00%",
    isDown: false,
  };

  useEffect(() => {
    setStockPrice(Number(stockMeta.price || 0));
  }, [stockMeta.price]);

  const handleTradeSubmit = async () => {
    if (mode === "ANALYZE") {
      closeBuyWindow();
      return;
    }

    try {
      await axios.post("https://zerodha-backend-ucqv.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode,
      });
      closeBuyWindow();
      window.location.reload();
    } catch (error) {
      console.error("New order failed:", error);
      window.alert("Unable to place order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!dragState.current.isDragging || !formRef.current) return;

      const deltaX = event.clientX - dragState.current.startX;
      const deltaY = event.clientY - dragState.current.startY;
      formRef.current.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
    };

    const handlePointerUp = () => {
      dragState.current.isDragging = false;
      if (formRef.current) formRef.current.classList.remove("dragging");
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const handlePointerDown = (event) => {
    if (event.target.closest("input, button, a")) return;

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      startY: event.clientY,
    };
    event.currentTarget.classList.add("dragging");
  };

  const actionName = mode === "BUY" ? "Buy" : mode === "SELL" ? "Sell" : "Analyze";

  return (
    <div
      className="container"
      id="buy-window"
      ref={formRef}
      onPointerDown={handlePointerDown}
    >
      <div className="regular-order">
        {mode === "ANALYZE" ? (
          <div className="inputs">
            <h3>{uid}</h3>
            <p>Last traded price: ₹{Number(stockMeta.price || 0).toFixed(2)}</p>
            <p>Change: {stockMeta.percent || "0.00%"}</p>
            <p>Trend: {stockMeta.isDown ? "Down" : "Up"}</p>
          </div>
        ) : (
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                min="1"
                onChange={(e) => setStockQuantity(Number(e.target.value) || 1)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(Number(e.target.value) || 0)}
                value={stockPrice}
              />
            </fieldset>
          </div>
        )}
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button type="button" className="btn btn-blue" onClick={handleTradeSubmit}>
            {mode === "ANALYZE" ? "Close" : actionName}
          </button>
          <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
