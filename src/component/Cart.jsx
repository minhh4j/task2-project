import React, { useContext } from 'react'
import { mainContext } from './Context'

function cart() {
    const {carts} = useContext(mainContext)
  return (
    <div>
        <h1>Cart</h1>
        <ul>
            {carts.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default cart