import { getCategories } from "@/axios/api";
import type { Book } from "@/page/home";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface RecommendedSectionProps {
  booksToDisplay: Book[];
}

export interface Category {
  id: number;
  name: string;
}

export default function CategorySection({
  booksToDisplay,
}: RecommendedSectionProps) {
  const [categoriesBooks, setCategoriesBooks] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then((data) => setCategoriesBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredBooks =
    selectedCategory === null
      ? booksToDisplay
      : booksToDisplay.filter(
          (book) =>
            book.category &&
            typeof book.category === "string" &&
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div
      className={`flex flex-col gap-5 max-h-full bg-white rounded-2xl px-3.5 py-5 w-auto`}
      style={{ height: "700px" }}
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-semibold text-accent-50">Category</h1>
      </div>

      <div>
        <ul className="flex flex-wrap gap-5">
          {/* All Button */}
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

          {/* Category List */}
          {categoriesBooks?.map((item, index) => (
            <li
              key={index}
              className={`${
                selectedCategory === item?.name
                  ? "bg-[#0054FD] text-white"
                  : "bg-[#E6F2FF]"
              } py-1.5 px-2.5 rounded-lg cursor-pointer`}
              onClick={() => setSelectedCategory(item?.name)}
            >
              {item?.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Books */}
      <div className="flex justify-center">
        <div
          className={`pt-5 w-[1350px] gap-5 flex flex-row overflow-x-auto py-1 px-1`}
          style={{
            maxHeight: "600px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Link to={`/details/book/${book.id}`} key={book.id}>
                <div className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-[201px]">
                  <div className="w-[200px] h-[305px] rounded-lg">
                    <img
                      src={book.cover_image_url}
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
  );
}
