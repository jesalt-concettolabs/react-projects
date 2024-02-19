import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const params = useParams();

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(
        `https://dummyjson.com/products/${params.productId}`,
        newProduct
      );
    },
  });

  const fetchProduct = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = response.data;
    return data;
  };

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProduct,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading product</p>;
  }

  return (
    <div className="m-5">
      <Link
        to="/"
        className="px-4 py-2 mr-2 border-gray-700 border-2 rounded-md"
      >
        Home
      </Link>
      <Link
        to="/products"
        className="px-4 py-2 border-gray-700 border-2 rounded-md"
      >
        Products
      </Link>
      <div className="mt-5">Product: {product.title}</div>
      <div className="mt-5">
        <button
          className="px-4 py-2 mr-2 border-gray-700 border-2 rounded-md"
          onClick={() => {
            mutation.mutate({ title: "updated title" });
          }}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Product;
