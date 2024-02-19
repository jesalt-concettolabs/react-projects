import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [userDetail, setUserDetail] = useState({ name: "", email: "" });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log("I am update effect");
    const viewData = async () => {
      try {
        const response = await axios.get(
          `https://65c1deaaf7e6ea596829f197.mockapi.io/crud-test/${id}`
        );
        setUserDetail(response.data);
        console.log("Update data: ", response.data);
      } catch (error) {
        console.log("ViewData: ", error);
      }
    };
    viewData();
  }, []);

  const handleUpdate = (e) => {
    console.log("I am handle Update");
    setShow(false);
    e.preventDefault();
    if (userDetail.name === "" && userDetail.email === "") {
      setShow(true);
    } else {
      axios
        .put(`https://65c1deaaf7e6ea596829f197.mockapi.io/crud-test/${id}`, {
          name: userDetail.name,
          email: userDetail.email,
        })
        .then(() => {
          navigate("/read");
        });
      setUserDetail({ name: "", email: "" });
    }
  };

  return (
    <div className="main">
      <h1>Update Operation</h1>
      <form>
        <div className="mb-3" id="main">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={userDetail.name}
            onChange={(e) =>
              setUserDetail({ ...userDetail, name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={userDetail.email}
            aria-describedby="emailHelp"
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        {show && <p>Please Enter Details</p>}
      </form>
    </div>
  );
};

export default Update;
