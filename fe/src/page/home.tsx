import { getBooks } from "@/axios/api";
import CategorySection from "@/components/home/category-section";
import DetailBookPage from "@/components/home/detail-book";
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

  const recommendedBooks = showAll
    ? books
    : hideDetail
    ? books?.slice(0, 6)
    : books?.slice(0, 5);

  const categoryBooks = books;

  const booksToDisplay = searchQuery ? filteredBooks : recommendedBooks;

  return (
    <>
      <header className="w-full h-28">
        <HeaderSection handleSearch={handleSearch} searchQuery={searchQuery} />
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
        <div
          className="flex flex-col overflow-y-auto h-full"
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
          <CategorySection
            booksToDisplay={categoryBooks}
            hideDetail={hideDetail}
            setHideDetail={setHideDetail}
            setIndexBook={setIndexBook}
          />
        </div>
        {!hideDetail && indexBook && (
          <div
            className={`flex-1 h-full  ${
              !searchQuery ? "max-w-[250px]" : "max-w-full"
            }  bg-[#001743] rounded-bl-lg rounded-tl-lg p-5`}
          >
            <DetailBookPage setHideDetail={setHideDetail} id={indexBook} />
          </div>
        )}
      </div>
    </>
  );
}
