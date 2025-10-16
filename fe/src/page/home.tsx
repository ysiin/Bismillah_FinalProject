import { getBooks } from "@/axios/api";
import CategorySection from "@/components/home/category-section";
import RecommendedSection from "@/components/home/recommended-section";
import { useEffect, useState } from "react";
import HeaderSection from "@/components/header-section";

export interface Book {
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

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(books, "data");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  const recommendedBooks = showAll ? books : books.slice(0, 6);

  const categoryBooks = books;

  const booksToDisplay = searchQuery ? filteredBooks : recommendedBooks;

  return (
    <>
      <header className="w-full h-28">
        <HeaderSection handleSearch={handleSearch} searchQuery={searchQuery} />
      </header>

      <div
        className={`overflow-y-auto bg-[#EAEFF4] h-[88.3%]`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="flex flex-col overflow-y-auto h-full p-5 gap-10"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <RecommendedSection
            booksToDisplay={booksToDisplay}
            searchQuery={searchQuery}
            showAll={showAll}
            setShowAll={setShowAll}
          />
          <CategorySection booksToDisplay={categoryBooks} />
        </div>
      </div>
    </>
  );
}
