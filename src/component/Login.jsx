import React, { useContext } from 'react'
import { mainContext } from './Context'
import axios from 'axios'

function login() {
    const {navigate} = useContext(mainContext)

    const login = async () => {
        try{
            const responce = await axios.get("http://localhost:3000/users")
            
        }
        catch(error){

        }
    }

  return (
    <div>
        <form action="">
            <label htmlFor="">email :</label>
            <input type="text" />
            <label htmlFor="">password :</label>
            <input type="text" />
            <button>Submit</button>
            <button onClick={() => navigate("/")}>SignUp</button>
        </form>
    </div>
  )
}

export default login