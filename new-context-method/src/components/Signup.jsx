import React, { useState } from "react";
import useUser from "../contexts/UserContext";

const Signup = () => {
  const { userDetails } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    userDetails({ firstName, lastName, password });
  };

  return (
    <div>
      <h1>Singup</h1>
      <input
        type="text"
        value={firstName}
        placeholder="FirstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        placeholder="LastName"
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Signup;
