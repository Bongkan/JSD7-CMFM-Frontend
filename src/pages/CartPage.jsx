import React, { useState, useEffect } from "react";
import TopCart from "../features/cartpages/TopCart";
import SelectCart from "../features/cartpages/SelectCart";
import TotalCart from "../features/cartpages/TotalCart";
import axiosInstance from "../config/myAPIs.js";
import { getCartState } from "../utils/localStorage.js";
import CircularProgress from "@mui/material/CircularProgress";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         setLoading(false)
//         const orderId = getCartState();
//         console.log("orderId:", orderId);
//         const response = await axiosInstance.get(`/orders/${orderId}`);
//         const products = response.data.cart_products;
//         setCart(
//           products.map((product) => ({
//             ...product,
//             deleted: false,
//           }))
//         );
//         setLoading(true);
//         console.log(response);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//         setLoading(true);
//       }
//     };

  const fetchCart = async () => {
    try {
      setLoading(false)
      const orderId = getCartState();
      console.log("orderId:", orderId);
      const response = await axiosInstance.get(`/orders/${orderId}`);
      const products = response.data.cart_products;
      setCart(products);
      setLoading(true);
      console.log(response);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setLoading(true);
    }
  };
  
  useEffect(() => {
    fetchCart();
  }, []);

  if (!loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }
  const UpdateAmount = (id, amount) => {
    if (amount < 1) {
      return;
    }
    const updatedCart = cart.map((product) => {
      if (product.product_id === id) {
        return { ...product, amount: amount };
      }
      return product;
    });
    setCart(updatedCart);
  };



  return (
    <div className="md:px-[100px]">
      <TopCart />
      <div className="flex flex-col sm:flex-col md:flex-row w-auto">
        <div className="w-full md:w-2/3">
          <SelectCart
    
            cart={cart}
            UpdateAmount={UpdateAmount}
            loading={loading}
            fetchCart={fetchCart}
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-100">
          <TotalCart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
