import { useState,useEffect } from "react";
import { ProductContext } from "./context/productContext";
import { useContext } from "react";

import "./product.css"


export function AddtoCart(){

    const [count,setCount]=useState(0)

    useEffect(
        ()=>{
            document.title=`Count: ${count}`
        }
    )

    return(
        <>
        <button onClick={()=>{setCount(count+1)}} className="add">Add to cart</button>
        {count}
        <button onClick={()=>{setCount(Math.max(0,count-1))}} className="remove">Remove from cart</button>
        </>

    )
}

function Product(){

    const products=useContext(ProductContext)

    return(
        <div>
            <h2>Products Profile Section</h2>
            <hr />

            <div className="product-container">
                {
                    products.map((product)=>(
                    <div className="product-card" key={product.id}>
                        <h2>pname:{product.name}</h2>
                        <img src={product.image} alt=""/>
                        <h3>price:{product.price}</h3>
                        <AddtoCart />
                        <button>Buy Now</button>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Product;