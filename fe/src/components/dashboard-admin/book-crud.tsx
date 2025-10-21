import { useState, useEffect } from "react";
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  getCategories,
} from "../../axios/api";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  isbn: string;
  publisher: string;
  year_published: number;
  category_id: number;
  total_copies: number;
  available_copies: number;
  total_pages: number;
  ratings: number;
}

interface Category {
  id: number;
  name: string;
}

export default function BookCrud() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  const fetchBooks = async () => {
    const books = await getBooks();
    setBooks(books);
  };

  const fetchCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const handleAdd = () => {
    setCurrentBook(null);
    setShowModal(true);
  };

  const handleEdit = (book: Book) => {
    setCurrentBook(book);
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    fetchBooks();
  };

  const handleSave = async (book: Book) => {
    if (currentBook) {
      await updateBook(book.id, book);
    } else {
      await createBook(book);
    }
    fetchBooks();
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Books</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Book
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="bg-white border-b">
              <td className="px-6 py-4">{book.title}</td>
              <td className="px-6 py-4">{book.author}</td>
              <td className="px-6 py-4">{book.year_published}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEdit(book)}
                  className="font-medium text-blue-600 hover:underline mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="absolute inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom relative z-20 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <BookForm
                book={currentBook}
                categories={categories}
                onSave={handleSave}
                onCancel={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BookForm({
  book,
  categories,
  onSave,
  onCancel,
}: {
  book: Book | null;
  categories: Category[];
  onSave: (book: Book) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    description: book?.description || "",
    isbn: book?.isbn || "",
    publisher: book?.publisher || "",
    year_published: book?.year_published || new Date().getFullYear(),
    category_id: book?.category_id || 1,
    total_copies: book?.total_copies || 1,
    available_copies: book?.available_copies || 1,
    total_pages: book?.total_pages || 1,
    ratings: book?.ratings || 1,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: book?.id || 0,
      ...formData,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
        {book ? "Edit Book" : "Add Book"}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="isbn"
            className="block text-sm font-medium text-gray-700"
          >
            ISBN
          </label>
          <input
            type="text"
            name="isbn"
            id="isbn"
            value={formData.isbn}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="publisher"
            className="block text-sm font-medium text-gray-700"
          >
            Publisher
          </label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            value={formData.publisher}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="year_published"
            className="block text-sm font-medium text-gray-700"
          >
            Year Published
          </label>
          <input
            type="number"
            name="year_published"
            id="year_published"
            value={formData.year_published}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category_id"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            name="category_id"
            id="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="total_copies"
            className="block text-sm font-medium text-gray-700"
          >
            Total Copies
          </label>
          <input
            type="number"
            name="total_copies"
            id="total_copies"
            value={formData.total_copies}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="available_copies"
            className="block text-sm font-medium text-gray-700"
          >
            Available Copies
          </label>
          <input
            type="number"
            name="available_copies"
            id="available_copies"
            value={formData.available_copies}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="total_pages"
            className="block text-sm font-medium text-gray-700"
          >
            Total Pages
          </label>
          <input
            type="number"
            name="total_pages"
            id="total_pages"
            value={formData.total_pages}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ratings"
            className="block text-sm font-medium text-gray-700"
          >
            Ratings
          </label>
          <input
            type="number"
            name="ratings"
            id="ratings"
            value={formData.ratings}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="mr-2 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
}
