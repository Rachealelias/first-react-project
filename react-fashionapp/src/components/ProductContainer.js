import React from "react";
import ProductCard from "./ProductCard";
function ProductContainer({products}){
    const productArr = products.map((e, index) => <ProductCard key={index} Product={e}/>)
    return (
        <div className="productContainer">
            {productArr}
        </div>
    )
}
export default ProductContainer