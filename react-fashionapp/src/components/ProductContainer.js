import React from "react";
import ProductCard from "./ProductCard";
function ProductContainer({products,deleteProducts}){
    const productArr = products.map((e, index) => <ProductCard key={index} Product={e} deleteProducts={deleteProducts}/>)

    
    return (
        <div className="productContainer">
            {productArr}
        
        </div>
    )
}
export default ProductContainer