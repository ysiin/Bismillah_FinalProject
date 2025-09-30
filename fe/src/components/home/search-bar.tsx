import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  handleSearch: (query: string) => void;
  searchQuery: string;
}

export default function SearchBar({ handleSearch, searchQuery }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 cursor-pointer" />
      <Input
        type="search"
        placeholder="Search Your Favorite Books"
        className="pl-8"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
