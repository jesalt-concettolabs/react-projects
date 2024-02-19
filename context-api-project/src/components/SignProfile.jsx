import React, { useContext } from "react";
import SignupContext from "../contextsingup/SignupContext";

const SignProfile = () => {
  const { updateObject } = useContext(SignupContext);
  if (!updateObject) return <div>Signup Detail Not Found</div>;
  return (
    <div>
      value1: {updateObject.firstName} value2: {updateObject.lastName}
      value3: {updateObject.password}
    </div>
  );
};

export default SignProfile;
