import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routes";
import Headers from "./layout/Header";
import { datePageWeb } from "./store/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={datePageWeb()}>
      <BrowserRouter>
        {/*   <Headers/> */}
        <RoutesApp />
      </BrowserRouter>{" "}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
