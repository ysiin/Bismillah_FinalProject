import { Search } from "lucide-react";
import { Input } from "../ui/input";
import type { Book } from "@/page/home";
import { SelectedMenu } from "./selected";
import { Button } from "../ui/button";

interface HeaderCategoryProps {
  books: Book[];
  handleSearch: (query: string) => void;
  searchQuery: string;
  selectedYears: string;
  selectedCategory: string;
  setSelectedYears: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: () => void;
  handleResetFilters: () => void;
}

export default function HeaderCategory({
  books,
  handleSearch,
  searchQuery,
  selectedYears,
  selectedCategory,
  setSelectedYears,
  setSelectedCategory,
  handleFilter,
  handleResetFilters,
}: HeaderCategoryProps) {
  return (
    <>
      <div className="bg-[#F0F5FF] p-5 rounded-[10px] flex flex-row items-end gap-5">
        <div className="flex flex-row gap-5 items-center">
          <div className="relative w-[500px]">
            <Search className="absolute left-5 top-3 h-5 w-5 text-gray-100 cursor-pointer" />
            <Input
              type="search"
              placeholder="Search By Category Or Author Or Publisher"
              className="pl-13 bg-[#F0F5FF] shadow shadow-black/30 placeholder:text-center placeholder:text-gray-100"
              onChange={(e) => handleSearch(e.target.value)}
              value={searchQuery}
            />
          </div>
          <div className="flex flex-col ">
            <SelectedMenu
              placeholder="Years Published"
              books={books}
              onValueChange={(value) => setSelectedYears(value.toString())}
              value={selectedYears}
            />
          </div>
          <div className="flex flex-col ">
            <SelectedMenu
              placeholder="Category"
              books={books}
              onValueChange={setSelectedCategory}
              value={selectedCategory}
            />
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
      </div>
    </>
  );
}
