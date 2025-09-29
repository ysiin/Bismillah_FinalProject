import DetailBookPage from "@/components/home/detail-book";
import HeaderPage from "@/components/home/header";
import { dummy } from "@/dummy";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [hideDetail, setHideDetail] = useState(true);
  const [indexBook, setIndexBook] = useState<number>(0);

  const booksToShow = showAll
    ? dummy
    : hideDetail
    ? dummy.slice(0, 6)
    : dummy.slice(0, 5);

  return (
    <>
      <header className="w-full h-28">
        <HeaderPage />
      </header>
      <div
        className={`${
          hideDetail ? "flex flex-col" : "flex flex-row"
        } overflow-y-auto bg-[#EAEFF4] h-[88.3%]`}
      >
        <div
          className="overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className={`flex flex-col gap-5 bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5  ${
              hideDetail ? "w-auto" : "w-fit"
            }`}
            style={showAll ? { height: "700px" } : { height: "" }}
          >
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-semibold text-accent-50">
                Recommended
              </h1>
              <div
                className="bg-sky-200 flex cursor-pointer items-center px-2.5 rounded-lg text-sky-700"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <span>Hide</span>
                ) : (
                  <span className="flex flex-row items-center">
                    See All <ChevronRight size={15} className="ml-1" />
                  </span>
                )}
              </div>
            </div>
            <div
              className={`pt-5 ${
                hideDetail
                  ? "flex flex-wrap justify-center"
                  : "grid grid-cols-5"
              } gap-5 w-full overflow-y-auto py-1 px-1 `}
              style={{
                maxHeight: "600px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {booksToShow.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                    onClick={() => {
                      setHideDetail(false);
                      setIndexBook(index);
                      console.log(index);
                    }}
                  >
                    <div className="w-[200px] h-[305px] rounded-lg">
                      <img
                        src={item.imgBook}
                        alt={item.nameBook}
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold">{item.nameBook} </p>
                      <p className="text-gray-300">{item.writer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {!hideDetail && (
          <div className="flex-1 h-full bg-[#001743] rounded-lg">
            <DetailBookPage setHideDetail={setHideDetail} index={indexBook} />
          </div>
        )}
      </div>
    </>
  );
}
