import { Search } from "lucide-react";
import { Input } from "../ui/input";
import type { Book } from "@/page/home";
import { SelectedMenu } from "./selected";

interface HeaderCategoryProps {
  books: Book[];
}

export default function HeaderCategory({ books }: HeaderCategoryProps) {
  return (
    <>
      <div className="relative w-full">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-100 cursor-pointer" />
        <Input
          type="search"
          placeholder="Search By Category Or Author Or Publisher"
          className="pl-8 bg-[#F0F5FF] shadow shadow-black/30 placeholder:text-center placeholder:text-gray-100"
          // onChange={(e)=>{}}
        />
      </div>
      <div className="bg-[#F0F5FF] p-5 rounded-[10px]">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col ">
            <h3 className="pl-2 text-gray-100">Title</h3>
            <SelectedMenu placeholder="Title" books={books} />
          </div>

          <div className="flex flex-col ">
            <h3 className="pl-2 text-gray-100">Category</h3>
            <SelectedMenu placeholder="Category" books={books} />
          </div>
        </div>
      </div>
    </>
  );
}
