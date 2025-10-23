import HeaderSection from "@/components/header-section"
import BookList from "@/components/borrow-list/BookList"
import { useEffect, useState } from "react"
import api from "@/axios/api" // pastikan file api.ts ada

export default function ListBook() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/borrowed") // ganti endpoint sesuai backend-mu
        setBooks(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchBooks()
  }, [])

  return (
    <>
      <header className="w-full h-28 shadow-md">
        <HeaderSection handleSearch={() => {}} searchQuery="" />
      </header>

      <div id="list-book" className="bg-[#EAEFF4] min-h-[88.3%] p-4">
        <div id="main-content" className="border rounded-3xl w-full h-[830px] bg-white">
        <BookList books={books} />
        </div>
      </div>
    </>
  )
}
