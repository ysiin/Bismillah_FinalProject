import type { Book } from "@/page/home"
import BookCover from "../ui/bookCover"


export default function BookCard({ book }: { book: Book }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  const statusTanggal = book.returned_at
    ? `Telah dikembalikan (${formatDate(book.returned_at)})`
    : `Batas Pengembalian: ${formatDate(book.due_date)}`

  return (
    <div className="bg-white border flex p-2 rounded-xl">
      <BookCover bookUrl={book.cover_image_url} />

      <div id="book-details" className="flex flex-col m-2 w-full">
        <div id="main-detail" className="flex justify-between items-center">
          <div className="flex gap-4 text-2xl">
            <h1 className="font-bold">{book.title}</h1>
            <h1 className="font-semibold">{book.author}</h1>
          </div>
          <div className="flex gap-4">
            <p className="border rounded-md px-2 bg-accent-50 text-white font-semibold">
              ⭐{book.ratings}
            </p>
            <p className="border rounded-md px-2 bg-accent-50 text-white font-semibold">
              {book.year_published}
            </p>
          </div>
        </div>

        <p className="text-lg font-semibold mt-2">{book.category}</p>
        <div className="flex justify-between">
        <p className="pt-4 text-gray-600">{book.description}</p>
        <p id="due_date" className="pt-22 text-gray-200">{statusTanggal} </p>
        </div>
      </div>
    </div>
  )
}
