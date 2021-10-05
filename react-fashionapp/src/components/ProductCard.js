import React from "react"

export default function ProductCard({Product}){
    return (
        <div>
         <img style={{height:'350px', width:'300px'}}  src={Product.image}/>
        </div>
    )
}