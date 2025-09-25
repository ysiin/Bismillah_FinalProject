import HeaderPage from "@/components/header-page";

export default function Home() {
  return (
    <>
      <header className="w-full h-28">
        <HeaderPage />
      </header>
      <div className="flex-1 overflow-y-auto bg-[#EAEFF4] w-full h-[88.3%]">
        <div className="bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5">
          <h1 className="text-3xl font-bold">Reccomended</h1>
          <div></div>
        </div>
      </div>
    </>
  );
}
