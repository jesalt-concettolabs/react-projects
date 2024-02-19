import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [userDetail, setUserDetail] = useState({ name: "", email: "" });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setShow(false);
    e.preventDefault();
    if (userDetail.name === "" && userDetail.email === "") {
      setShow(true);
    } else {
      axios
        .post("https://65c1deaaf7e6ea596829f197.mockapi.io/crud-test", {
          name: userDetail.name,
          email: userDetail.email,
        })
        .then(() => {
          navigate("/read");
        });
      setUserDetail({ name: "", email: "" });
      console.log("create post: ", userDetail);
    }
  };

  console.log("create post outside: ", userDetail);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>CRUD Operations</h1>
        <button className="btn btn-primary" onClick={() => navigate("/read")}>
          Read Data
        </button>
      </div>
      <form>
        <div className="mb-3" id="main">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={userDetail.name}
            onInput={(e) =>
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
            onInput={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
        {show && <p>Please Enter Details</p>}
      </form>
    </>
  );
};

export default Create;
