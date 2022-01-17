import React from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
 
function Headers({children}) {
 
  return (
    <div> 
      <h1>Desarrollo Colectivo</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      > 
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>| 
        <Link to="/about">about</Link>|{" "}       
        <Link to="/team">team</Link>|{" "}
        <Link to="/teams">teams</Link>|{" "}
        <Link to="/home">home</Link>  |{" "} <Link to="/login">login</Link>|   {children} 
         
      </nav>
   
    </div>
  );
}

export default Headers;
