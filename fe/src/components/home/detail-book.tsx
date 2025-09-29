import { dummy } from "@/dummy";

interface DetailBookPageProps {
  setHideDetail: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}

export default function DetailBookPage({
  setHideDetail,
  index,
}: DetailBookPageProps) {
  const book = dummy[index];

  if (!book) {
    return (
      <div className="h-full w-full text-white flex items-center justify-center">
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full text-white p-6">
      <button
        onClick={() => setHideDetail(true)}
        className="mb-4 px-4 py-2 bg-red-500 rounded cursor-pointer"
      >
        X
      </button>

      <div className="flex flex-col gap-4">
        <img
          src={book.imgBook}
          alt={book.nameBook}
          className="w-48 h-72 rounded-lg"
        />
        <h1 className="text-2xl font-bold">{book.nameBook}</h1>
        <p className="text-gray-300">by {book.writer}</p>
        <p className="text-yellow-400">⭐ {book.ratting} / 5</p>
        <p className="text-sm text-gray-400">{book.pages} pages</p>
        <p className="mt-2">{book.aboutBook}</p>
      </div>
    </div>
  );
}
