import SearchBar from "./search-bar";

export default function HeaderPage() {
  return (
    <div className="flex flex-row justify-between h-full items-end pb-2 px-5">
      <SearchBar />
      <div>AKUN</div>
    </div>
  );
}
