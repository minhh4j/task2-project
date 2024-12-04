import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const mainContext = createContext()
function Context({children}) {
    const navigate = useNavigate()
    const [text ,setText] = useState("")
    const [carts , setCarts] = useState([])
    const [users , setUsers] = useState([])
    

    useEffect(() => {
        const fetchUser = async() => {
            try{
                const responce = await axios.get("http://localhost:3000/users")
                setUsers(responce.data)
                // console.log(users)
                
            }
            catch(error){
                console.error(error)
            }
        }
        fetchUser()

    })

  return (
   <mainContext.Provider value={{navigate , setText , text , carts , setCarts , setUsers , users , setCarts}}>
    {children}
   </mainContext.Provider>
  )
}

export default Context