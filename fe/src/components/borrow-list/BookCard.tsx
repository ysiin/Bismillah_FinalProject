import BookCover from "../ui/bookCover"

interface Book {
  id: number
  title: string
  author: string
  year_published: number
  isbn: string
  category: string
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-white border flex p-2 rounded-xl">
      <BookCover />

      <div id="book-details" className="flex flex-col m-2 w-full">
        <div id="main-detail" className="flex justify-between items-center">
          <div className="flex gap-4 text-2xl">
            <h1 className="font-bold">{book.title}</h1>
            <h1 className="font-semibold">{book.author}</h1>
          </div>
          <div className="flex gap-4">
            <p className="border rounded-md px-2 bg-accent-50 text-white font-semibold">
              {book.year_published}
            </p>
            <p className="border rounded-md px-2 bg-accent-50 text-white font-semibold">
              {book.category}
            </p>
          </div>
        </div>

        <p className="text-lg font-semibold mt-2">{book.category}</p>
        <p className="pt-4 text-gray-600">Deskripsi singkat buku...</p>
      </div>
    </div>
  )
}
