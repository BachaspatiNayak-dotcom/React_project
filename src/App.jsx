import React from "react";
import "./app.css"
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import { ProductContext } from "./context/productContext";
import { useRef,useState } from "react";


function App(){

  const products=[
    {
      id:1,
      name:"Iphone",
      price:100000,
      image:"/images/iphone.jpg"
    },
    {
      id:2,
      name:"Shirt",
      price:2000,
      image:"/images/shirt.webp"
    },
    {
      id:3,
      name:"Shoes",
      price:5000,
      image:"/images/shoes.webp"
    },
    {
      id:4,
      name:"jacket",
      price:1000,
      image:"/images/jacket.jpg"
    }
  ]

  const inputRef=useRef(null); //here inputRef.current=null

  function handleFocus(){

    inputRef.current.focus();
  }

  const [count,setCount]=useState(0);

  function inc(){
    setCount(count+1)
  }

  function dec(){
    setCount(Math.max(0,count-1))
  }

 const countRef=useRef(0)

 function increament(){
  countRef.current++
  console.log(countRef.current)
 }


  return (  
    <>
    {/* <ProductContext.Provider value={products}>

      <Navbar />
      <Dashboard />

    </ProductContext.Provider> */}

    <input type="text" value="" ref={inputRef}/> 
    <button onClick={handleFocus}>Focus</button>

    <button onClick={inc}>inc count</button>
    {count}
    <button onClick={dec}>dec count</button>

    <h2>{countRef.current}</h2>
    <button type="button" onClick={increament}>useRef</button>

    </>
  )
}

export default App


