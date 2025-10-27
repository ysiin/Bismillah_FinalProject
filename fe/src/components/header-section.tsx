import Notification from "./notificationa/Notification";
import ProfileDropdown from "./profile-dropdown";
import SearchBar from "./home/search-bar";
import { useLocation } from "react-router";

interface HeaderPageProps {
  handleSearch: (query: string) => void;
  searchQuery: string;
}

export default function HeaderSection({
  handleSearch,
  searchQuery,
}: HeaderPageProps) {
  const path = useLocation().pathname;
  return (
    <div
      className={`flex flex-row ${
        path === "/" ? "justify-between items-end" : "justify-end"
      } h-full items-end pb-2 px-5`}
    >
      {path === "/" ? (
        <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      ) : null}

      <div className="flex items-center gap-5">
        <Notification/>
        <ProfileDropdown />
      </div>
    </div>
  );
}
