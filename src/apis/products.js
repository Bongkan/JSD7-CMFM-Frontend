// import axiosInstance from "../config/myAPIs.js"

// const allProducts = await axiosInstance.get("/products");
// console.log(allProducts);

// export default allProducts

// fetchProducts.js

import axiosInstance from "../config/myAPIs.js";
import axios from "axios";

const fetchProducts2 = async () => {
  try {
    const response = await axiosInstance.get("/products");
    console.log(response.data); // Assuming the API returns JSON data
    return response.data; // Return the data if needed
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to handle it somewhere else
  }
};
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products"); // Assuming the API returns JSON data
    return response.data; // Return the data if needed
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to handle it somewhere else
  }
};

const getAllProducts = async () => await axiosInstance.get("/products");

const addProduct = async (data) => await axiosInstance.post("/products", data);

const deleteProduct = async (id) => await axiosInstance.delete(`/products/${id}`);

const editProduct = async (id, data) => await axiosInstance.patch(`/products/${id}`, data);

export default { fetchProducts, getAllProducts, addProduct, deleteProduct, editProduct };