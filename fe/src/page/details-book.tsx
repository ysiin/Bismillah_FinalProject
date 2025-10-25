import Img1 from "@/assets/img1.jpg";
import { borrowBook, getCategories, getDetailsBooks } from "@/axios/api";
import HeaderSection from "@/components/header-section";
import type { Book } from "@/page/home";
import { ArrowLeftCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Category } from "@/components/home/category-section";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function DetailBookPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
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

  const handleBorrow = async () => {
    if (user && book) {
      try {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);
        await borrowBook(user.id, book.id, dueDate.toISOString().split("T")[0]);
        navigate("/list-booking");
        toast.success("Buku berhasil dipinjam!");
      } catch (error) {
        console.error("Failed to borrow book:", error);
        toast.error("Gagal meminjam buku. Silakan coba lagi.");
      }
    }
  };

  const handleToastBorrow = () => {
    toast.custom(
      (t) => (
        <div className="p-3 bg-white border border-black rounded-[5px]">
          <p className="text-sm mb-3">Apakah Anda ingin meminjam buku ini?</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => {
                handleBorrow();
                toast.dismiss(t);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              OK
            </button>
            <button
              onClick={() => toast.dismiss(t)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-gray-400 transition"
            >
              Batal
            </button>
          </div>
        </div>
      ),
      { duration: 3000 }
    );
  };

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

            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2 pl-5 ">
                <p className="text-[16px] font-normal text-[#858A93]">
                  {book.author}
                </p>
                <h1 className="font-semibold text-4xl">{book.title}</h1>

                <div className="flex flex-row gap-5 items-center">
                  <p className="text-white bg-accent-50 py-2 px-2.5 rounded-[10px]">
                    ⭐ {book.ratings} / 5
                  </p>
                  <p className="text-white bg-accent-50 py-2 px-2.5 rounded-[10px]">
                    {book.year_published}
                  </p>
                  <p className="text-white bg-accent-50 py-2 px-2.5 rounded-[10px]">
                    {book.total_pages} pages
                  </p>
                </div>

                <p className="mt-2 w-[200px]">{book.description}</p>
              </div>

              <div className="flex flex-row items-center gap-1">
                <Button
                  onClick={handleToastBorrow}
                  className="py-2 px-8 bg-[#0054FE] text-white rounded-lg"
                >
                  Borrow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
