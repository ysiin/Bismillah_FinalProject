import BookCard from "./BookCard";

export default function BookList({ books }: { books: any[] }) {
  if (!books || books.length === 0) {
    return (
      <p className="text-gray-500 text-center font-bold text-2xl pt-10">
        Belum ada buku yang sedang dipinjam.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
