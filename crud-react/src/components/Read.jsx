import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`https://65c1deaaf7e6ea596829f197.mockapi.io/crud-test/${id}`)
      .then(() => {
        fetchData();
      });
    console.log("Data Deleted");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65c1deaaf7e6ea596829f197.mockapi.io/crud-test"
      );
      const detailResponse = response.data;
      setData(detailResponse);
      setLoading(false);
      console.log("I am read data: ", detailResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("I am read effect");
    fetchData();
  }, []);

  return (
    <div className="main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Read Operation</h1>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Create User
        </button>
      </div>
      {loading ? (
        <p style={{ textAlign: "center", fontSize: "40px", marginTop: "50px" }}>
          Data aa Raha ha Ruko jara....
        </p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Read;
