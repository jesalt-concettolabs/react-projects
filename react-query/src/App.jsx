import { Link } from "react-router-dom";

function App() {
  return (
    <div className="m-5 flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-gray-600 uppercase">
        The Awesome React query
      </h1>
      <div className="mt-10 flex gap-3">
        <Link to="/" className="px-4 py-2 border-gray-700 border-2 rounded-md">
          Home
        </Link>
        <br />
        <Link
          to="/products"
          className="px-4 py-2 border-gray-700 border-2 rounded-md"
        >
          Products
        </Link>
      </div>
    </div>
  );
}

export default App;
