import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
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

export const createBook = async (book: any) => {
  try {
    const response = await api.post("/books", book);
    return response.data.data;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
};

export const updateBook = async (id: number, book: any) => {
  try {
    const response = await api.put(`/books/${id}`, book);
    return response.data.data;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

export const deleteBook = async (id: number) => {
  try {
    await api.delete(`/books/${id}`);
  } catch (error) {
    console.error("Error deleting book:", error);
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

export const borrowBook = async (user_id: number, book_id: number, due_date: string) => {
  try {
    const response = await api.post("/borrows", {
      user_id,
      books: [{ book_id, due_date }],
    });
    return response.data.data;
  } catch (error) {
    console.error("Error borrowing book:", error);
    throw error;
  }
};

export default api;
