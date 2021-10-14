import React ,{useState}from "react"

export default function ProductCard(props){
  
const {Product, deleteProduct} = props
const like = '😎'
const dislike='☹️'
const [likeState, setLike] = useState(false)

function handleLike(){
  const config = {
    method: "PATCH",
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify({liked:!likeState})
  }
  
    fetch(`http://localhost:4000/products/${Product.id}`,config)
        .then(r => r.json())
        .then(data => {
            console.log(data, 'update')
            setLike(!likeState)
        })
}
     function handleDeleteClick() {
       fetch(`http://localhost:4000/products/${Product.id}`, {
         method: "DELETE",
       })
         .then(r => r.json())
         .then(data => {
          // console.log(data)
          deleteProduct(Product.id)
           console.log(data, 'deleted item')
         });
     }
    return (
        <div className="productCard">
         <img style={{height:'300px', width:'300px'}}  src={Product.image}/>
         <p> {Product.title} </p>
         <p> {Product.price} </p>
         <button onClick={handleLike}>{likeState ? like :dislike}</button>
         <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}