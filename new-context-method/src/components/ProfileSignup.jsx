import React from "react";
import useUser from "../contexts/UserContext";

const ProfileSignup = () => {
  const { userDetails } = useUser();
  console.log(userDetails);
  //   return <div>Welcome: {userDetails.firstName}</div>;
};

export default ProfileSignup;
