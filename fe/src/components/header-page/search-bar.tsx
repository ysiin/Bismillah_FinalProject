// import { Input } from "@/components/ui/input";
// export function InputSearch() {
//   return <Input type="email" placeholder="Email" />;
// }
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 cursor-pointer" />
      <Input
        type="search"
        placeholder="Search Your Favorite Books"
        className="pl-8"
      />
    </div>
  );
}
