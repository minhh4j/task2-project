import axios from "axios";
import React, { useContext, useState } from "react";
import { mainContext } from "./Context";

function singUp() {
  const { users, navigate } = useContext(mainContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { name, email, pass };
      console.log(user); 
      const response = await axios.post("http://localhost:3000/users", user);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">username :</label>
        <input
          type="text"
          placeholder="enter username"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <label htmlFor="">email :</label>
        <input
          type="text"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label htmlFor="">password</label>
        <input
          type="text"
          placeholder="enter password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          required
        />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default singUp;
