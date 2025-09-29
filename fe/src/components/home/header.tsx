import Bell from "../icon/bell";
import ProfileDropdown from "../profile-dropdown";
import SearchBar from "./search-bar";

export default function HeaderPage() {
  return (
    <div className="flex flex-row justify-between h-full items-end pb-2 px-5">
      <SearchBar />
      <div className="flex items-center gap-2">
        <Bell/>
        <ProfileDropdown/>
      </div>
      
    </div>
  );
}
