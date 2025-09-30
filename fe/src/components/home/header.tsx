import { Bell } from "lucide-react";
import ProfileDropdown from "../profile-dropdown";
import SearchBar from "./search-bar";

interface HeaderPageProps {
  handleSearch: (query: string) => void;
  searchQuery: string;
}

export default function HeaderPage({ handleSearch, searchQuery }: HeaderPageProps) {
  return (
    <div className="flex flex-row justify-between h-full items-end pb-2 px-5">
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <div className="flex items-center gap-2">
        <Bell />
        <ProfileDropdown />
      </div>
    </div>
  );
}
