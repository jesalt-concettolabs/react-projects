import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="py-6 font-bold text-2xl">
        Welcome To Redux Toolkit Store
      </h2>
      <div>
        <h3 className="font-bold text-xl pb-5">Products</h3>
        <Products />
      </div>
    </div>
  );
};

export default Home;
