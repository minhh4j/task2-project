import React, { useContext } from 'react'
import { mainContext } from './Context'

function home() {
    const {navigate , setText , text , setCarts , carts} = useContext(mainContext)

    const handleClick = () => {
        setCarts([...carts , text])
        setText("")
    }
  return (
    <div>
       
        <h5 onClick={() => navigate("/login") }>login</h5>
        <h5 onClick={() => navigate("/cart")}>Cart</h5>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text}/> <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default home