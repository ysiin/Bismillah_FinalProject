import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchCategory() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-100 cursor-pointer" />
      <Input
        type="search"
        placeholder="Search By Category Or Author"
        className="pl-8 bg-[#F0F5FF] shadow shadow-black/30 placeholder:text-center placeholder:text-gray-100"
      />
    </div>
  );
}
