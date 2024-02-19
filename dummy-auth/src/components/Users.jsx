import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://dummyjson.com/users").then((res) => {
        setUsersData(res.data.users);
      });
    } catch (error) {
      console.log("User Data error: ", error);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">Users</h1>
      <div>
        <ul>
          {usersData.map((user, i) => (
            <div key={user.id}>
              <p>{i + 1}</p>
              <li>{user.username}</li>
              <p>{user.password}</p>
              <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
