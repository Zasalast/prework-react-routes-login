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
          </Menu.Item>
          <Menu.Item key="3">
            {" "}
            <Link to="/about">about</Link>|{" "}
          </Menu.Item>
          <Menu.Item key="4">
            {" "}
            <Link to="/team">team</Link>|{" "}
          </Menu.Item>
          <Menu.Item key="5">
            {" "}
            <Link to="/home">home</Link>
          </Menu.Item>{" "}
          |{" "}
          <Menu.Item key="6">
            {" "}
            <Link to="/login">login</Link>|
          </Menu.Item>{" "}
          {children}
          {/*   </nav> */}
        </Menu>
      </Header>
    </div>
  );
}

export default Headers;
