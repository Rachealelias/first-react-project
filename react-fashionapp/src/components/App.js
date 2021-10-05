//import logo from './logo.svg';
//import './App.css';
import React, { useState,useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";


function App() {
  const [Signedup, setSignedUp] = useState(false);
  console.log(Signedup)
  const [products, setProducts] = useState([])
    useEffect(() => {
      fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(setProducts)
    }, [])
  return (
    <div className="App">
      
      <Switch>
      <Route exact path="/SignUp"
        render={(routerProps)=>
          <SignUp routerProps={routerProps} setSignedUp={setSignedUp} />}>
        </Route>
      
      <Route exact path="/">
      <Home Signedup={Signedup} products={products} />
        </Route>
      </Switch>
    </div>
  )
    
  
}

export default App;
