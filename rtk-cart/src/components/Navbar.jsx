import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const selector = useSelector((state) => state.cart);
  return (
    <nav className="flex justify-between items-center">
      <span className="uppercase font-bold">Redux Store</span>
      <div>
        <Link className="ml-5 no-underline text-black text-xl" to="/">
          Home
        </Link>
        <Link className="ml-5 no-underline text-black text-xl" to="/cart">
          Cart
        </Link>
        <span className="font-bold uppercase ml-10">
          Cart items: {selector.length}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
