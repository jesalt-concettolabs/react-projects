import { useState } from "react";
import SignupContext from "./SignupContext";

const SignupContextProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});

  const updateObject = (key, value) => {
    setUserDetail((...prevDetail) => ({ ...prevDetail, [key]: value }));
  };

  return (
    <SignupContext.Provider value={{ userDetail, updateObject }}>
      {children}
    </SignupContext.Provider>
  );
};

export default SignupContextProvider;
