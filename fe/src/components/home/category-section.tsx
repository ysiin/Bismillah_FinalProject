import Img1 from "@/assets/img1.jpg";
import { getCategories } from "@/axios/api";
import type { Book } from "@/page/home";
import { useEffect, useState } from "react";

interface RecommendedSectionProps {
  booksToDisplay: Book[];
  hideDetail: boolean;
  setHideDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setIndexBook: React.Dispatch<React.SetStateAction<number | null>>;
}
interface Category {
  id: number;
  name: string;
}
export default function CategorySection({
  booksToDisplay,
  hideDetail,
  setHideDetail,
  setIndexBook,
}: RecommendedSectionProps) {
  const [categoriesBooks, setCategoriesBooks] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    getCategories()
      .then((data) => setCategoriesBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredBooks =
    selectedCategory === null
      ? booksToDisplay
      : booksToDisplay.filter((book) => book.category_id === selectedCategory);

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
            <li
              className={`${
                selectedCategory == null
                  ? "bg-[#0054FD] text-white"
                  : "bg-[#E6F2FF]"
              } py-1.5 px-2.5 rounded-lg cursor-pointer`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </li>
            {categoriesBooks.map((item, index) => (
              <li
                className={`${
                  selectedCategory == item?.id
                    ? "bg-[#0054FD] text-white"
                    : "bg-[#E6F2FF]"
                } py-1.5 px-2.5  rounded-lg cursor-pointer`}
                key={index}
                onClick={() => setSelectedCategory(item?.id)}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <div
            className={`pt-5 ${
              hideDetail ? "w-[1350px]" : "w-[1100px]"
            } gap-5 flex flex-row overflow-x-auto py-1 px-1`}
            style={{
              maxHeight: "600px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
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
