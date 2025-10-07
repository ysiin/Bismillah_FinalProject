import Img1 from "@/assets/img1.jpg";
import type { Book } from "@/page/home";

interface RecommendedSectionProps {
  booksToDisplay: Book[];
  hideDetail: boolean;
  setHideDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setIndexBook: React.Dispatch<React.SetStateAction<number | null>>;
}

const category: string[] = [
  "All",
  "Fiksi",
  "Teknologi",
  "Sejarah",
  "Education",
  "Busisness",
];

export default function CategorySection({
  booksToDisplay,
  hideDetail,
  setHideDetail,
  setIndexBook,
}: RecommendedSectionProps) {
  return (
    <>
      <div
        className={`flex flex-col gap-5 max-h-full bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5 ${
          hideDetail ? "w-auto " : "w-fit"
        }`}
        style={{ height: "700px" }}
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold text-accent-50">Category</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-5">
            {category.map((item, index) => (
              <li
                className="border border-red-700 p-1.5 rounded-lg"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <div
            className={`pt-5 ${
              hideDetail ? "w-[1350px]" : "w-[1100px]"
            } gap-5 flex flex-row overflow-x-auto py-1 px-1 justify-between`}
            style={{
              maxHeight: "600px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {booksToDisplay.length > 0 ? (
              booksToDisplay.map((book) => (
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
