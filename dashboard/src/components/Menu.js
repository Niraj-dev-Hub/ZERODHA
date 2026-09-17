
import React, {useState} from "react";
import {Link} from 'react-router-dom';



const Menu = ({ username }) => {
 const [selectedMenu, setSelectedMenu] =useState(0);

 const handleMenuClick = (index) =>{
  setSelectedMenu (index);
 };

 const handleLogout = () => {
  document.cookie = "token=; Max-Age=0; path=/";
  window.location.href = "http://localhost:3000/login";
 };

 const menuClass = "menu";
 const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Zerodha logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link 
            style={{textDecoration:"none"}} 
            to= "/" 
            onClick={()=> handleMenuClick(0)}
            >
            <p 
            className={selectedMenu === 0 ? activeMenuClass:menuClass}
            >
              Dashboard</p>
            </Link>
          </li>
          <li>
            <Link 
            style={{textDecoration:"none"}} 
            to= "/orders" 
            onClick={()=> handleMenuClick(1)}
            >
            <p 
            className={selectedMenu === 1 ? activeMenuClass:menuClass}
            >
              Orders</p>
            </Link>
          </li>
          <li>
            <Link 
            style={{textDecoration:"none"}} 
            to= "/holdings" 
            onClick={()=> handleMenuClick(2)}
            >
            <p 
            className={selectedMenu === 2 ? activeMenuClass:menuClass}
            >
              Holdings</p>
            </Link>
            
          </li>
          <li>
            <Link 
            style={{textDecoration:"none"}} 
            to= "/positions" 
            onClick={()=> handleMenuClick(3)}
            >
            <p 
            className={selectedMenu === 3 ? activeMenuClass:menuClass}
            >
             Positions</p>
            </Link>
            
          </li>
          <li>
            <Link 
            style={{textDecoration:"none"}} 
            to= "/funds" 
            onClick={()=> handleMenuClick(4)}
            >
            <p 
            className={selectedMenu === 4 ? activeMenuClass:menuClass}
            >
           Funds</p>
            </Link>
           
          </li>
          <li>
            <Link 
            style={{textDecoration:"none"}} 
            to= "/apps" 
            onClick={()=> handleMenuClick(5)}
            >
            <p 
            className={selectedMenu === 5 ? activeMenuClass:menuClass}
            >
            Apps</p>
            </Link>
           
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username ">{username || "USERID"}</p>
          <button type="button" className="logout-button  " onClick={handleLogout}
          style={{ fontSize: "12px", padding: "5px 5px", margin: "8px", backgroundColor: "#f41f10d2", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Logout
          </button>
        </div>

      </div>

    </div>
  );
};

export default Menu;
