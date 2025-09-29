import DetailBookPage from "@/components/home/detail-book";
import HeaderPage from "@/components/home/header";
import { dummy } from "@/dummy";
import { useState } from "react";

export default function Home() {
  const [handleSeAll, setHandleSeAll] = useState<Boolean>(false);
  const [hideDetail, setHideDetail] = useState(true);
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
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {handleSeAll ? (
            <div
              className={`flex flex-col gap-10 bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5 ${
                hideDetail ? "w-auto" : "w-fit"
              }`}
            >
              <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-semibold text-accent-50">
                  Recommended
                </h1>
                <span
                  className="bg-sky-200 flex cursor-pointer items-center px-2.5 rounded-lg text-sky-700"
                  onClick={() => setHandleSeAll(false)}
                >
                  Hide
                </span>
              </div>
              <div
                className={`${
                  hideDetail
                    ? "flex flex-wrap justify-center"
                    : "grid grid-cols-5"
                } gap-5 w-fit`}
              >
                {dummy?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                      onClick={() => setHideDetail(false)}
                    >
                      <div className="w-[200px] h-[305px] rounded-lg">
                        <img
                          src={item?.imgBook}
                          alt={item?.nameBook}
                          className="w-full h-full rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-lg font-semibold">{item.nameBook}</p>
                        <p className="text-gray-300">{item.writer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              className={`flex flex-col gap-10 bg-white rounded-2xl mx-8 mt-10 px-3.5 py-5 ${
                hideDetail ? "w-auto" : "w-fit"
              }`}
            >
              <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-semibold text-accent-50">
                  Recommended
                </h1>
                <span
                  className="bg-sky-200 flex cursor-pointer items-center px-2.5 rounded-lg text-sky-700"
                  onClick={() => setHandleSeAll(true)}
                >
                  See All {">"}
                </span>
              </div>
              <div className="flex flex-row justify-center gap-5 w-auto">
                {hideDetail
                  ? dummy.slice(0, 6)?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                          onClick={() => setHideDetail(false)}
                        >
                          <div className="w-[200px] h-[305px] rounded-lg">
                            <img
                              src={item?.imgBook}
                              alt={item?.nameBook}
                              className="w-full h-full rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-lg font-semibold">
                              {item.nameBook}
                            </p>
                            <p className="text-gray-300">{item.writer}</p>
                          </div>
                        </div>
                      );
                    })
                  : dummy.slice(0, 5)?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                          onClick={() => setHideDetail(false)}
                        >
                          <div className="w-[200px] h-[305px] rounded-lg">
                            <img
                              src={item?.imgBook}
                              alt={item?.nameBook}
                              className="w-full h-full rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-lg font-semibold">
                              {item.nameBook}
                            </p>
                            <p className="text-gray-300">{item.writer}</p>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          )}
        </div>
        <div
          className={`${
            hideDetail ? "hidden" : "flex-1 h-full bg-[#001743] rounded-lg"
          }  `}
        >
          <DetailBookPage setHideDetail={setHideDetail} />
        </div>
      </div>
    </>
  );
}
