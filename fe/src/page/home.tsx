import { getBooks } from "@/axios/api";
import DetailBookPage from "@/components/home/detail-book";
import HeaderPage from "@/components/home/header";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Img1 from "@/assets/img1.jpg";

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

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const booksToShow = showAll
    ? books
    : hideDetail
    ? books.slice(0, 6)
    : books.slice(0, 5);

  return (
    <>
      <header className="w-full h-28">
        <HeaderPage />
      </header>

      <div
        className={`${
          hideDetail ? "flex flex-col" : "flex flex-row"
        } overflow-y-auto bg-[#EAEFF4] h-[88.3%]`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className={`flex flex-col gap-5 bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5  ${
              hideDetail ? "w-auto" : "w-fit"
            }`}
            style={showAll ? { height: "700px" } : { height: "" }}
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-3xl font-semibold text-accent-50">
                Recommended
              </h1>
              <span
                className="bg-sky-200 flex cursor-pointer items-center px-2.5 rounded-lg text-sky-700"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  "Hide"
                ) : (
                  <span className="flex items-center">
                    See All <ChevronRight size={15} className="ml-1" />
                  </span>
                )}
              </span>
            </div>
            <div
              className={`pt-5 ${
                hideDetail
                  ? "flex flex-wrap justify-center"
                  : "grid grid-cols-5"
              } gap-5 w-full overflow-y-auto py-1 px-1`}
              style={{
                maxHeight: "600px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {booksToShow.map((book) => (
                <div
                  key={book.id}
                  className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-[201px]"
                  onClick={() => {
                    setHideDetail(false);
                    setIndexBook(book.id);
                  }}
                >
                  <div className="w-[200px] h-[305px] rounded-lg">
                    <img
                      src={Img1}
                      alt={book.title}
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{book.title}</p>
                    <p className="text-gray-300">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`flex flex-col gap-5 bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5  ${
              hideDetail ? "w-auto" : "w-fit"
            }`}
            style={showAll ? { height: "700px" } : { height: "" }}
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-3xl font-semibold text-accent-50">
                Recommended
              </h1>
              <span
                className="bg-sky-200 flex cursor-pointer items-center px-2.5 rounded-lg text-sky-700"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  "Hide"
                ) : (
                  <span className="flex items-center">
                    See All <ChevronRight size={15} className="ml-1" />
                  </span>
                )}
              </span>
            </div>
            <div
              className={`pt-5 ${
                hideDetail
                  ? "flex flex-wrap justify-center"
                  : "grid grid-cols-5"
              } gap-5 w-full overflow-y-auto py-1 px-1`}
              style={{
                maxHeight: "600px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {booksToShow.map((book) => (
                <div
                  key={book.id}
                  className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-[201px]"
                  onClick={() => {
                    setHideDetail(false);
                    setIndexBook(book.id);
                  }}
                >
                  <div className="w-[200px] h-[305px] rounded-lg">
                    <img
                      src={Img1}
                      alt={book.title}
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{book.title}</p>
                    <p className="text-gray-300">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Section */}
        {!hideDetail && indexBook && (
          <div className="flex-1 h-full bg-[#001743] rounded-lg p-5 ">
            <DetailBookPage setHideDetail={setHideDetail} id={indexBook} />{" "}
          </div>
        )}
      </div>
    </>
  );
}
