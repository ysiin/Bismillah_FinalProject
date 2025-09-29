import DetailBookPage from "@/components/home/detail-book";
import HeaderPage from "@/components/home/header";
import { dummy } from "@/dummy";

export default function Home() {
  return (
    <>
      <header className="w-full h-28">
        <HeaderPage />
      </header>
      <div className="flex flex-row overflow-y-auto bg-[#EAEFF4] h-[88.3%]">
        <div className="overflow-y-auto">
          <div className="flex flex-col gap-10  bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5 w-fit">
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-bold">Reccomended</h1>
              <span className="bg-sky-200 flex cursor-pointer items-center px-2.5 rounded-lg text-sky-700">
                See All {">"}
              </span>
            </div>
            <div className="flex flex-row gap-5 w-fit">
              {dummy.slice(0, 5)?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <div className="border border-red-500 w-[200px] h-[305px] rounded-lg">
                      <img
                        src={item.imgBook}
                        alt={item.nameBook}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p>{item.nameBook}</p>
                      <p>{item.writer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-10  bg-white rounded-2xl ml-8 mt-10 px-3.5 py-5 w-fit">
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-bold">Category</h1>
              <span className="bg-sky-200 flex cursor-pointer items-center px-2.5 rounded-lg text-sky-700">
                See All {">"}
              </span>
            </div>
            <div className="flex flex-row gap-5 w-fit">
              {dummy.slice(0, 5)?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    <div className="border border-red-500 w-[200px] h-[305px] rounded-lg">
                      {item.imgBook}
                    </div>
                    <div className="flex flex-col">
                      <p>{item.nameBook}</p>
                      <p>{item.writer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1 h-full bg-[#001743] rounded-lg">
          <DetailBookPage />
        </div>
      </div>
    </>
  );
}
