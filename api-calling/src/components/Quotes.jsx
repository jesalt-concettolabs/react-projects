import axios from "axios";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [response, setResponse] = useState([]);

  const fetchQuotes = async () => {
    try {
      const res = await axios.get(
        `https://famous-quotes4.p.rapidapi.com/random`,
        {
          headers: {
            "X-RapidAPI-Key":
              "ed0c0b71c7msh859da566145da10p10a0a0jsn189dae3f73cc",
            "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
          },
          params: { category: "all", count: "1" },
        }
      );
      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <div>
        {response.map((res, index) => {
          return (
            <div key={res.id}>
              <h1>Posts: {index + 1}</h1>
              <p>{res.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Quotes;
