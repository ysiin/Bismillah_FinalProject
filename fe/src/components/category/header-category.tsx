import { Search } from "lucide-react";
import { Input } from "../ui/input";
import type { Book } from "@/page/home";
import { SelectedMenu } from "./selected";
import { Button } from "../ui/button";

interface HeaderCategoryProps {
  books: Book[];
  handleSearch: (query: string) => void;
  searchQuery: string;
  selectedTitle: string;
  selectedCategory: string;
  setSelectedTitle: (value: string) => void;
  setSelectedCategory: (value: string) => void;
  handleFilter: () => void;
  handleResetFilters: () => void;
}

export default function HeaderCategory({
  books,
  handleSearch,
  searchQuery,
  selectedTitle,
  selectedCategory,
  setSelectedTitle,
  setSelectedCategory,
  handleFilter,
  handleResetFilters,
}: HeaderCategoryProps) {
  return (
    <>
      <div className="relative w-full">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-100 cursor-pointer" />
        <Input
          type="search"
          placeholder="Search By Category Or Author Or Publisher"
          className="pl-8 bg-[#F0F5FF] shadow shadow-black/30 placeholder:text-center placeholder:text-gray-100"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchQuery}
        />
      </div>
      <div className="bg-[#F0F5FF] p-5 rounded-[10px] flex flex-row items-end gap-5">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col ">
            <h3 className="pl-2 text-gray-100">Title</h3>
            <SelectedMenu
              placeholder="Title"
              books={books}
              onValueChange={setSelectedTitle}
              value={selectedTitle}
            />
          </div>

          <div className="flex flex-col ">
            <h3 className="pl-2 text-gray-100">Category</h3>
            <SelectedMenu
              placeholder="Category"
              books={books}
              onValueChange={setSelectedCategory}
              value={selectedCategory}
            />
          </div>
        </div>
        <Button
          onClick={handleFilter}
          className="bg-[#4682f8] text-white hover:bg-[#0054FE] cursor-pointer"
        >
          Search
        </Button>
        <Button
          onClick={handleResetFilters}
          variant="outline"
          className="bg-red-400 text-white hover:bg-red-500 border-none cursor-pointer"
        >
          Reset
        </Button>
      </div>
    </>
  );
}
