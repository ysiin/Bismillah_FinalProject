import { getBooks } from "@/axios/api";
import DetailBookPage from "@/components/home/detail-book";
import HeaderPage from "@/components/home/header";
import RecommendedSection from "@/components/home/recommended";
import { useEffect, useState } from "react";

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
  const [hideDetail, setHideDetail] = useState(true);
  const [indexBook, setIndexBook] = useState<number | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

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

  const booksToShow = showAll
    ? books
    : hideDetail
    ? books.slice(0, 6)
    : books.slice(0, 5);

  const booksToDisplay = searchQuery ? filteredBooks : booksToShow;

  return (
    <>
      <header className="w-full h-28">
        <HeaderPage handleSearch={handleSearch} searchQuery={searchQuery} />
      </header>

      <div
        className={`${
          hideDetail ? "" : "flex flex-row justify-between"
        } overflow-y-auto bg-[#EAEFF4] h-[88.3%]`}
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
          hideDetail={hideDetail}
          setHideDetail={setHideDetail}
          setIndexBook={setIndexBook}
        />

        {!hideDetail && indexBook && (
          <div
            className={`flex-1 h-full  ${
              !searchQuery ? "max-w-[250px]" : "max-w-full"
            }  bg-[#001743] rounded-lg p-5`}
          >
            <DetailBookPage setHideDetail={setHideDetail} id={indexBook} />
          </div>
        )}
      </div>
    </>
  );
}
