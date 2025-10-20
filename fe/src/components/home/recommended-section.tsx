import { ChevronRight } from "lucide-react";
import Img1 from "@/assets/img1.jpg";
import type { Book } from "@/page/home";
import { Link } from "react-router";

interface RecommendedSectionProps {
  booksToDisplay: Book[];
  searchQuery: string;
  showAll: boolean;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RecommendedSection({
  booksToDisplay,
  searchQuery,
  showAll,
  setShowAll,
}: RecommendedSectionProps) {
  return (
    <>
      <div
        className={`flex flex-col gap-5 max-h-full bg-white rounded-2xl px-3.5 py-5  ${"w-auto "}`}
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
            className={`pt-5 flex flex-wrap gap-5 w-full ${
              showAll ? "overflow-y-auto" : ""
            } py-1 px-1`}
            style={{
              maxHeight: "600px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {booksToDisplay.length > 0 ? (
              booksToDisplay.map((book) => (
                <Link to={`/details/book/${book.id}`} key={book.id}>
                  <div
                    key={book.id}
                    className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-[201px]"
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
                </Link>
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
