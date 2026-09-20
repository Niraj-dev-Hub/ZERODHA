import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("zerodha_token");

      if (!token) {
        window.location.href = "https://zerodha-frontd.vercel.app/login";
        return;
      }

      try {
        const { data } = await axios.post(
          "https://zerodha-backend-ucqv.onrender.com/verify",
          {},
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.status) {
          setUsername(data.user);
        } else {
          localStorage.removeItem("zerodha_token");
          document.cookie = "token=; Max-Age=0; path=/";
          window.location.href = "https://zerodha-frontd.vercel.app/login";
        }
      } catch (error) {
        console.error("Dashboard authentication failed:", error);
        localStorage.removeItem("zerodha_token");
        document.cookie = "token=; Max-Age=0; path=/";
        window.location.href = "https://zerodha-frontd.vercel.app/login";
      }
    };

    verifyUser();
  }, []);

  return (
    <>
      <TopBar username={username} />
      <Dashboard />
    </>
  );
};

export default Home;
