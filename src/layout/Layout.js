import { 
  Outlet
} from "react-router-dom";
import logo from "./../logo.svg";
import Headers from "./Header"; 
import {AuthStatus} from '../components/Auth/Auth'
function Layout() {
  return (
    <div>
        <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="" /> 
        <Headers/>
        <AuthStatus /> 
      </header> 
    </div>
      <Outlet/>
     
    </div>
  );
}
 export default Layout