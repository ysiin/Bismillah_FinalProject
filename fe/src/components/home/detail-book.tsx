import Img1 from "@/assets/img1.jpg";
import { getDetailsBooks } from "@/axios/api";
import type { Book } from "@/page/home";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface DetailBookPageProps {
  setHideDetail: React.Dispatch<React.SetStateAction<boolean>>;
  id: string | number;
}

export default function DetailBookPage({
  setHideDetail,
  id,
}: DetailBookPageProps) {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getDetailsBooks(id);
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book:", error);
      }
    };

    fetchBook();
  }, [id]);
  console.log(book?.author);
  if (!book) return <p className="text-white">Loading book...</p>;

  return (
    <div className="h-full w-full text-white">
      <button
        onClick={() => setHideDetail(true)}
        className="mb-2 px-2 py-2 bg-red-500 rounded cursor-pointer"
      >
        <X size={15} />
      </button>
      <div className="flex flex-col items-center gap-4">
        <img src={Img1} alt={book.title} className="w-48 h-72 rounded-lg" />
        <h1 className="text-center text-lg font-medium">{book.title}</h1>
        <p className="text-[15px] font-extralight">by {book.author}</p>
        <p className="text-yellow-400">⭐ {book.ratings} / 5</p>
        <p className="text-sm text-gray-400">{book.total_pages} pages</p>
        <p className="mt-2 text-center">{book.description}</p>
      </div>
    </div>
  );
}
