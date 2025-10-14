import { ChevronRight } from "lucide-react";
import Img1 from "@/assets/img1.jpg";
import type { Book } from "@/page/home";

interface RecommendedSectionProps {
  booksToDisplay: Book[];
  searchQuery: string;
  showAll: boolean;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
  hideDetail: boolean;
  setHideDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setIndexBook: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function RecommendedSection({
  booksToDisplay,
  searchQuery,
  showAll,
  setShowAll,
  hideDetail,
  setHideDetail,
  setIndexBook,
}: RecommendedSectionProps) {
  return (
    <>
      <div
        className={`flex flex-col gap-5 max-h-full bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5  ${
          hideDetail ? "w-auto " : "w-fit"
        }`}
        style={showAll ? { height: "700px" } : {}}
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold text-accent-50">
            {searchQuery ? "Search Results" : "Recommended"}
          </h1>
          {!searchQuery && (
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
          )}
        </div>

        <div className="flex justify-center">
          <div
            className={`pt-5 ${
              hideDetail ? "flex flex-wrap" : "grid grid-cols-5"
            } gap-5 w-full ${showAll ? "overflow-y-auto" : ""} py-1 px-1`}
            style={{
              maxHeight: "600px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {booksToDisplay?.length > 0 ? (
              booksToDisplay?.map((book) => (
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
              ))
            ) : (
              <div className="w-full text-center">
                <p className="text-xl font-semibold text-gray-500">
                  No books found
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
