import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      if (!document.cookie.split("; ").some((cookie) => cookie.startsWith("token="))) {
        window.location.href = "https://zerodha-backend-ucqv.onrender.com/login";
        return;
      }

      try {
        const { data } = await axios.post(
          "https://zerodha-backend-ucqv.onrender.com/verify",
          {},
          { withCredentials: true }
        );

        if (data.status) {
          setUsername(data.user);
        } else {
          document.cookie = "token=; Max-Age=0; path=/";
          window.location.href = "https://zerodha-backend-ucqv.onrender.com/login";
        }
      } catch (error) {
        console.error("Dashboard authentication failed:", error);
        document.cookie = "token=; Max-Age=0; path=/";
        window.location.href = "https://zerodha-backend-ucqv.onrender.com/login";
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
