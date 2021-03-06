import React from 'react';
import {  useNavigate, useLocation, Navigate } from "react-router-dom";
const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};
let AuthContext = React.createContext(null);
function AuthProvider({ children }) {
    let [user, setUser] = React.useState(null);
    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };
    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };
    let value = { user, signin, signout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
function useAuth() {
    return React.useContext(AuthContext);
}
function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();
    if (!auth.user) {
        return <> ''</>;
    }
    return (<>
       {auth.user}{""}
      <button onClick={() => {
            auth.signout(() => navigate("/home"));
        }}>
        Sign out  
      </button>
    </>);
}
function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
    if (!auth.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }
    return children;
}
export {RequireAuth,AuthStatus,useAuth,AuthProvider,fakeAuthProvider}