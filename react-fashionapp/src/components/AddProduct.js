import React, {useState} from "react"

function AddProduct(props){
  const  {routerProps, addProduct} = props
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        //console.log(formData);
        fetch("http://localhost:4000/products",{
          method:"POST",
          headers:
      { "Content-Type": "application/json" },
    
    body: JSON.stringify(
    {
      "title": formData.title,
      "price": formData.price,
      "description": formData.description,
      "category": formData.category,
      "image": formData.image
    })
        })
        .then(res => res.json())
        .then(addProduct)
       
        setFormData(true);

        routerProps.history.push("/");
      }

      return (
          <div id="add">
              <h2> New Products</h2><br/>
              <form onSubmit={handleSubmit}><br/>
        {/* <label>
          id:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </label><br/> */}

        <label>
            title:
            <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            />
        </label><br/>

        <label>
            price:
            <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            />
        </label><br/>

        <label>
            description:
            <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            />
        </label><br/>

        <label>
            category:
            <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            />
        </label><br/>

        <label>
            image:
            <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            />
        </label><br/>
        <button type="submit">Add Product</button>
              </form>
          </div>
      )
    
}
export default AddProduct;