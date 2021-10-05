import React from "react";
import {Redirect} from "react-router-dom";
import ProductContainer from "./ProductContainer";



function Home(props) {
  const {Signedup,products} = props;

    if (!Signedup) return <Redirect to ="/SignUp"/>
    
  return (
      <div className="home">
          <ProductContainer products={products}/>
          </div>
  )
}

export default Home;