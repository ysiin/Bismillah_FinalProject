import axios from "axios";

const API_BOOKS = import.meta.env.VITE_API_BOOKS as string;
const API_CATEGORIES = import.meta.env.VITE_API_CATEGORIES as string;
const API_LOGIN= import.meta.env.VITE_API_LOGIN as string;

export const getBooks = async () => {
  try {
    const response = await axios.get(API_BOOKS);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getDetailsBooks = async (id: string | number) => {
  try {
    const response = await axios.get(`${API_BOOKS}/${id}`);
    console.log("DETAIL RESPONSE:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(API_CATEGORIES);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_LOGIN, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Error login:", error);
    throw error;
  }
};