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

    function deleteProduct(id){
      const newProducts = products.filter(p => p.id !== id);
      console.log(id)
          setProducts(newProducts);
          console.log(products)
    }

    function addProduct(obj){
      console.log(obj, 'add product')
      const newArray= [...products, obj]
      setProducts(newArray)
    }
    
     return (
    <div className="App">
      {Signedup ? <NavBar/> : null } 
      <Switch>
        <Route exact path="/SignUp"
           render={(routerProps)=>
           <SignUp routerProps={routerProps} setSignedUp={setSignedUp}/>}>
        </Route>
      
        <Route exact path="/"
          render={(routerProps)=>
          <Home  routerProps={routerProps} Signedup={Signedup} products={products} 
          deleteProduct={deleteProduct} 
           setSignedUp={setSignedUp}/>} 
            >
        </Route>

       <Route exact path="/AddProduct"
       render={(routerProps)=>
         <AddProduct routerProps={routerProps} addProduct={addProduct}/>}>
        </Route>
     </Switch>
    
    </div>
  )
    
  
}

export default App;
