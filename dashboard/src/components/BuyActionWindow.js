import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);

  const [stockPrice, setStockPrice] = useState(0.0);
  
  const formRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, startY: 0 });

  const handleBuyClick = () => {
    axios.post("http://localhost:3005/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const { closeBuyWindow } = useContext(GeneralContext);

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

  return (
    <div
      className="container"
      id="buy-window"
      ref={formRef}
      onPointerDown={handlePointerDown}
    >
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
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
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
