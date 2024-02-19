import React, { useContext, useState } from "react";
import SignupContext from "../contextsingup/SignupContext";

const Singup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const { userDetail, updateObject } = useContext(SignupContext);

  const handleClick = (e) => {
    e.preventDefault();
    updateObject({ firstName, lastName, password });
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="FirstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="LastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Singup;
