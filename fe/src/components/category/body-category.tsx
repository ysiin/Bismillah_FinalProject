import type { Book } from "@/page/home";
import Img1 from "@/assets/img1.jpg";
import { Link } from "react-router";

interface BodyCategoryProps {
  books: Book[];
}

export default function BodyCategory({ books }: BodyCategoryProps) {
  return (
    <div className="flex bg-white rounded-[10px] px-3.5 py-5">
      <div
        className={`flex flex-wrap overflow-x-auto pt-5 w-full gap-5 py-1 px-1 rounded-[10px]`}
        style={{
          maxHeight: "600px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {books.length > 0 ? (
          books.map((book) => (
            <Link to={`/details/book/${book.id}`} key={book.id}>
              <div className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 w-[201px]">
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
  );
}
