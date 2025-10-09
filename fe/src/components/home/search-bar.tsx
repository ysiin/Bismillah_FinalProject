import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  handleSearch: (query: string) => void;
  searchQuery: string;
}

export default function SearchBar({
  handleSearch,
  searchQuery,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-3 h-5 w-5 text-gray-100 cursor-pointer" />
      <Input
        type="search"
        placeholder="Search Your Favorite Books"
        className="pl-10 placeholder:text-gray-100"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
