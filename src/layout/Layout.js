import { 
  Outlet
} from "react-router-dom";
 
import Headers from "./Header"; 
import {AuthStatus} from '../components/Auth/Auth'
function Layout() {
  return (
    <div>
        <div className="App">
      <header className="App-header">       
        <Headers><AuthStatus /> </Headers>
        
      </header> 
    </div>
      <Outlet/>
     
    </div>
  );
}
 export default Layout