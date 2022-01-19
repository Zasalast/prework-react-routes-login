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
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;
function Headers({ children }) {
  return (
    <div>
      {" "}
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <h1>Desarrollo Colectivo</h1>
          {/*   <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >  */}
          <Menu.Item key="1">
            {" "}
            <Link to="/invoices">Invoices</Link> |{" "}
          </Menu.Item>
          <Menu.Item key="2">
            {" "}
            <Link to="/expenses">Expenses</Link>|{" "}
          </Menu.Item>{" "}
          <Link to="/about">about</Link>| <Link to="/team">team</Link>|{" "}
          <Link to="/home">home</Link>|<Link to="/login">login</Link>|{children}
          {/*   </nav> */}
        </Menu>
      </Header>
    </div>
  );
}

export default Headers;
