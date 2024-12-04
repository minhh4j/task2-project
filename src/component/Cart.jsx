import React, { useContext } from 'react'
import { mainContext } from './Context'

function cart() {
    const {carts , setCarts} = useContext(mainContext)
    const handledelete = (item ,index) => {
      const filter = carts.filter((x , y) => y != index )
      setCarts(filter)
    }

  return (
    <div>
        <h1>Cart</h1>
        <ul>
          
            {carts.map((item,index) => (
              <li key={index}>{item} <button onClick={() => handledelete(item , index)}>delete</button></li>
              
            ))}
        </ul>
           
    </div>
  )
}

export default cart