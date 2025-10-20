import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  withCredentials: true, // Important for Sanctum
});

export const getBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getDetailsBooks = async (id: string | number) => {
  try {
    const response = await api.get(`/books/${id}`);
    console.log("DETAIL RESPONSE:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export default api;
