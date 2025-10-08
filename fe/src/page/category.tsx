import { getBooks } from "@/axios/api";
import HeaderCategory from "@/components/category/header-category";
import HeaderSection from "@/components/header-section";
import { useEffect, useState } from "react";
import type { Book } from "./home";
import BodyCategory from "@/components/category/body-category";

export default function Category() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <header className="w-full h-28">
        <HeaderSection handleSearch={() => {}} searchQuery="" />
      </header>
      <div className="flex flex-col gap-10 bg-[#EAEFF4] h-[88.3%] p-10">
        <HeaderCategory books={books} />
        <BodyCategory books={books} />
      </div>
    </>
  );
}
