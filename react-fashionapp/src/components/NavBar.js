import React from "react";
import { NavLink} from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar(props) {
  const {setSignedUP, routerProps} = props;
  
    function handleLogout() {
        setSignedUP(false);
      routerProps.history.push("/SignUp");
    }

    return (
        <div>
          <NavLink
            to="/"
            
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home
          </NavLink> 

           <NavLink
        to="/SignUp"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        SignUp
      </NavLink> 
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;