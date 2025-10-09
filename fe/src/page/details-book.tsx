import Img1 from "@/assets/img1.jpg";
import { getDetailsBooks } from "@/axios/api";
import type { Book } from "@/page/home";
import { ArrowLeftCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function DetailBookPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const numericId = Number(id);
        const data = await getDetailsBooks(numericId);
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book:", error);
      }
    };

    fetchBook();
  }, [id]);
  console.log(book, "detail book");
  if (!book) return <p className="text-white">Loading book...</p>;

  return (
    <div className="h-full w-full text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-2.5 px-2 py-2 bg-red-500 rounded cursor-pointer"
      >
        <ArrowLeftCircle size={15} />
      </button>
      <div className="flex flex-col items-center gap-2">
        <img src={Img1} alt={book.title} className="w-48 h-72 rounded-lg" />
        <h1 className="text-center text-lg font-medium">{book.title}</h1>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[15px] font-extralight text-center">by</p>
          <p className="text-[15px] font-extralight text-center">
            {book.author}
          </p>
        </div>
        <p className="text-yellow-400">⭐ {book.ratings} / 5</p>
        <p className="text-sm text-gray-400">{book.total_pages} pages</p>
        <p className="mt-2 text-center">{book.description}</p>
      </div>
    </div>
  );
}
