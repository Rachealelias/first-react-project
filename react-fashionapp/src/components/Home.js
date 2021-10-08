import React from "react";
import {Redirect} from "react-router-dom";
import ProductContainer from "./ProductContainer";



function Home(props) {
  const {Signedup,products,setSignedUp,routerProps} = props;

    if (!Signedup) return <Redirect to ="/SignUp"/>
    
    function handleLogout() {
      setSignedUp(false);
      routerProps.history.push("/SignUp");
    }

    
  return (
    <div className="home">
      <div>
        <button onClick={handleLogout}>Logout</button>
        </div>
      <ProductContainer products={products}/>
    </div>
  )
}

export default Home;