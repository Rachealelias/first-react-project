import React from "react";
import ProductCard from "./ProductCard";
function ProductContainer({products,deleteProduct}){
    const productArr = products.map((e, index) => <ProductCard key={index} Product={e} 
    deleteProduct={deleteProduct}/>)

    
    return (
        <div className="productContainer">
            {productArr}
        
        </div>
    )
}
export default ProductContainer