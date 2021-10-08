import React from "react";

import { NavLink} from "react-router-dom";

const linkStyles = {
  width: "100px",
  //padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  color: "white",
  
};

function NavBar() {

  return (
    <div>
      <NavLink
        to="/AddProduct"
        exact
        style={linkStyles}
        // activeStyle={{
        //   background: "darkblue",
        // }}
      >
        AddProduct
      </NavLink>
    </div>
  );
}

export default NavBar