import React from 'react'
import Productsection from './productsection'

function Dashboard(props) {
  return (
    <div>
      <h2>Dashboard</h2>
      <Productsection products={props.products}/>
    </div>
  )
}

export default Dashboard
