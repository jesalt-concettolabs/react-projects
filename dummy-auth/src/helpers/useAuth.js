import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const signIn = async (data) => {
    try {
      let authresult = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );
      let userObj = { ...authresult.data };
      userObj.token = authresult.data?.token;
      setUser(userObj);
      alert("Login Successfull");
      navigate(location.state.from || "/users");
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, signIn, signOut };
};
