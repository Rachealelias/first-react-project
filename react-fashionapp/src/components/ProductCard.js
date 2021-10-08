import React ,{useState}from "react"

export default function ProductCard(props){
const {Product, deleteProducts} = props
const like = '😎'
const dislike='☹️'

const {likeState, setLike} = useState(false)
function handleLike(id){
    fetch(`http://localhost:4000/products/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify({liked:!likeState})
      })
        .then((r) => r.json())
        .then((data) => {
            console.log(data, 'update')
            setLike(!likeState)
        })
}
     function handleDeleteClick(id) {
       fetch(`http://localhost:4000/products/${id}`, {
         method: "DELETE",
       })
         .then((r) => r.json())
         .then((data) => {
             deleteProducts(data.id)
             console.log(data)
           
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