import axios from "axios";

const API_BOOKS = import.meta.env.VITE_API_BOOKS as string;

export const getBooks = async () => {
  try {
    const response = await axios.get(API_BOOKS);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getDetailsBooks = async (id: string | number) => {
  try {
    const response = await axios.get(`${API_BOOKS}/${id}`);
    console.log("DETAIL RESPONSE:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
