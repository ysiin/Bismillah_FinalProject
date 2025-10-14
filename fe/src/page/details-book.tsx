import Img1 from "@/assets/img1.jpg";
import { getCategories, getDetailsBooks } from "@/axios/api";
import HeaderSection from "@/components/header-section";
import type { Book } from "@/page/home";
import { ArrowLeftCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Category } from "@/components/home/category-section";

export default function DetailBookPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const numericId = Number(id);
        const data = await getDetailsBooks(numericId);
        const dataCategory = await getCategories();

        setCategory(dataCategory);
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book:", error);
      }
    };

    fetchBook();
  }, [id]);
  // if (id == category?.id) {

  console.log(category, "kwkww");
  if (!book) return <p className="text-white">Loading book...</p>;

  return (
    <>
      <header className="w-full h-28">
        <HeaderSection handleSearch={() => {}} searchQuery="" />
      </header>
      <div className="w-full bg-[#EAEFF4] h-[88.3%] p-10">
        <div className="bg-white p-5 rounded-[10px] w-full h-full">
          <button
            onClick={() => navigate(-1)}
            className="mb-2.5 px-2 py-2 bg-red-500 rounded text-white cursor-pointer"
          >
            <ArrowLeftCircle size={15} />
          </button>
          <div className="flex gap-2">
            <div className="w-72 h-96">
              <img
                src={Img1}
                alt={book.title}
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 pl-5">
              <p className="text-[16px] font-normal text-[#858A93]">
                {book.author}
              </p>
              <h1 className="font-semibold text-4xl">{book.title}</h1>
              <div className="flex flex-row gap-5 items-center">
                <p className="text-white bg-accent-50 py-2 px-2.5 rounded-[10px]">
                  ⭐ {book.ratings} / 5
                </p>
                <p className="text-white bg-accent-50 py-2 px-2.5 rounded-[10px]">
                  ⭐ {book.year_published}
                </p>
                <p className="text-white bg-accent-50 py-2 px-2.5 rounded-[10px]">
                  {book.total_pages} pages
                </p>
                <p className="text-white bg-accent-50 py-2 px-2.5 rounded-[10px]">
                  ⭐ {book.ratings} / 5
                </p>
              </div>
              <p className="mt-2  w-[200px]">{book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
