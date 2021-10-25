import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

function SignUp(props) {
   const {setSignedUp, routerProps} = props;
    console.log(props)
  //const history = useHistory();
   const [formData, setFormData] = useState({
     email: "",
     password: "",
  });

   function handleChange(e) {
     setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
 
  // function addUser(obj){
  //   console.log(obj, 'add user')
  //   const newArray= [...formData, obj]
  //   setFormData(newArray)
  // }
    
 function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    fetch("http://localhost:4000/users",{
          method:"POST",
          headers:
      { "Content-Type": "application/json" },
    
    body: JSON.stringify(
    {
      "email": formData.email,
      "password": formData.password
    })
        })
       // .then(res => res.json())
       // .then(addUser)
       
        setSignedUp(true);
        routerProps.history.push("/");
      }
    
 return (
    <div className="form">
        <form onSubmit={handleSubmit}>
      <h1 className= "welcome"><u>Welcome to Racheal's Couture</u></h1><br/>
      <h2>Please Sign Up</h2>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /><br/>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      /><br/>
      <button type="submit">Sign up</button>
    </form>
 
    </div>
   );
  
}


export default SignUp;