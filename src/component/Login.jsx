import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "./Context";
import axios from "axios";

function login() {
  const { navigate, users } = useContext(mainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
e.preventDefault()
  const user =   users.find((x) => x.email === email && x.pass === password)
  if(user){
    navigate("/")
  }
  else{
    alert("wrong password and email")
  }
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">email :</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">password :</label>
        <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button onClick={() => navigate("/signup")}>SignUp</button>
      </form>
    </div>
  );
}

export default login;
