//import logo from './logo.svg';
//import './App.css';
import React, { useState,useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import AddProduct from "./AddProduct";


function App() {
  
  const [Signedup, setSignedUp] = useState(false);
 // console.log(Signedup)
  const [products, setProducts] = useState([])
    useEffect(() => {
      fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(setProducts)
    }, []);

    const deleteProducts = (id) =>{
      const newProducts = products.filter((p) => p.id !== id);
           setProducts(newProducts);
    }
    
  return (
    <div className="App">
      {Signedup ? <NavBar/> : null } 
      <Switch>
        <Route exact path="/SignUp"
           render={(routerProps)=>
           <SignUp routerProps={routerProps} setSignedUp={setSignedUp} />}>
        </Route>
      
        <Route exact path="/"
          render={(routerProps)=>
          <Home  routerProps={routerProps} Signedup={Signedup} products={products} deleteProducts={deleteProducts} 
           setSignedUp={setSignedUp} />}  >
        </Route>

       <Route exact path="/AddProduct">
         <AddProduct />
        </Route>
      </Switch>
    </div>
  )
    
  
}

export default App;
