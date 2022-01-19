import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthProvider, RequireAuth } from "./../components/Auth/Auth";
import Layout from "../layout/Layout";
import { LoginPage } from "../pages/public/Login";
import About from "../pages/public/about";
import Home from "../pages/public/home";
import Team from "../pages/private/team";
import Expenses from "../pages/public/expenses";
import Invoices from "../pages/public/invoices";

import Invoice from "./../pages/public/invoice";
function RoutesApp() {
  const handleLogout = () => {
    /* noteService.setToken(null) */
    window.localStorage.removeItem("loggedNoteAppUser");
  };
  return (
    <AuthProvider>
      <button onClick={() => handleLogout}>logout</button>
      {/*routes public*/}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<About />} />

          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
        </Route>
      </Routes>
      {/*routes private*/}
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="expenses"
            element={
              <RequireAuth>
                <Expenses />
              </RequireAuth>
            }
          />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
export default RoutesApp;
