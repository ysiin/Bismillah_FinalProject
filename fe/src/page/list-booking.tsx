import HeaderSection from "@/components/header-section";
import { useEffect, useState } from "react";
import api from "@/axios/api";
import BookList from "@/components/borrow-list/Booklist";

export default function ListBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/borrows");

        const formattedBooks = res.data.flatMap((borrow: any) =>
          borrow.details.map((detail: any) => ({
            id: detail.book.id,
            title: detail.book.title,
            author: detail.book.author,
            year_published: detail.book.year_published,
            isbn: detail.book.isbn,
            rating: detail.book.ratings,
            category: detail.book.category.name ?? "Tanpa Kategori",
            description: detail.book.description,
            due_date: detail.due_date,
            returned_at: detail.returned_at,
            cover_image: detail.book.cover_image,
          }))
        );
        console.log(res.data, "daata");
        setBooks(formattedBooks);
      } catch (err) {
        console.error("Gagal mengambil data borrow:", err);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <header className="w-full h-28 shadow-md">
        <HeaderSection handleSearch={() => {}} searchQuery="" />
      </header>

      <div id="list-book" className="bg-[#EAEFF4] min-h-[88.3%] p-4">
        <div id="main-content" className="">
          <BookList books={books} />
        </div>
      </div>
    </>
  );
}
