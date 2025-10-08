import SearchCategory from "@/components/category/search-category";
import HeaderSection from "@/components/header-section";

export default function Category() {
  return (
    <>
      <header className="w-full h-28">
        <HeaderSection handleSearch={() => {}} searchQuery="" />
      </header>
      <div className="bg-[#EAEFF4] h-[88.3%] p-10">
        <SearchCategory />
      </div>
    </>
  );
}
