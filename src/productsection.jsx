import React from 'react'
import Product from './product'

function Productsection(props) {
  return (
    <div>
      <h2>Product Section</h2>
      <Product products={props.products}/>
    </div>
  )
}

export default Productsection
