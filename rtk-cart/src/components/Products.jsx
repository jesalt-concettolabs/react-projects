import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/createSlice";
import { STATUS, fetchProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleClick = (item) => {
    dispatch(add(item));
  };

  if (status === STATUS.LOADING) {
    return (
      <h2 className="text-center text-4xl text-red-400">Ruk Ja Bhaii!!!</h2>
    );
  }

  if (status === STATUS.ERROR) {
    return (
      <h2 className="text-center text-4xl text-red-400">
        Something Went Wrong!!!
      </h2>
    );
  }

  return (
    <div className="grid gap-7 grid-cols-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white p-5 text-center rounded-xl border border-slate-400"
        >
          <img src={item.image} alt={item.title} className="h-[80px] mx-auto" />
          <h4>{item.title}</h4>
          <h5>${item.price}</h5>
          <button
            onClick={() => handleClick(item)}
            className="border-none outline-none bg-[#764abc] text-white px-1 py-2 rounded cursor-pointer font-bold"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
