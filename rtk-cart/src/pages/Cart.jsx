import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/createSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h2 className="py-6 font-bold text-2xl">Cart</h2>
      <div className="grid gap-7 grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 text-center rounded-xl border border-slate-400"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[80px] mx-auto"
            />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button
              onClick={() => handleRemove(item.id)}
              className="border-none outline-none bg-[#764abc] text-white px-1 py-2 rounded cursor-pointer font-bold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
