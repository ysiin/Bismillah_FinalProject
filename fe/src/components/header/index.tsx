import { BookCheck, ChartBarStacked, HouseIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="py-10 px-4">
          <span className="border border-red-400 mx-5 py-5 px-15">
            BookBase
          </span>
        </div>
        <ul className="flex flex-col gap-5">
          <Link to="/">
            {currentPath === "/" ? (
              <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                <div className="bg-[#0C56F2] rounded-2xl p-2">
                  <HouseIcon className="text-white" />
                </div>
                <li className="text-accent-50 font-semibold">Discover</li>
              </div>
            ) : (
              <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                <div className="p-2">
                  <HouseIcon />
                </div>
                <li className="text-gray-400">Beranda</li>
              </div>
            )}
          </Link>
          <Link to="/category">
            {currentPath === "/category" ? (
              <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                <div className="bg-[#0C56F2] rounded-2xl p-2">
                  <ChartBarStacked className="text-white" />
                </div>
                <li className="text-accent-50 font-semibold">Category</li>
              </div>
            ) : (
              <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                <div className="p-2">
                  <ChartBarStacked />
                </div>
                <li className="text-gray-400">Category</li>
              </div>
            )}
          </Link>
          <Link to="/list-booking">
            {currentPath === "/list-booking" ? (
              <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                <div className="bg-[#0C56F2] rounded-2xl p-2">
                  <BookCheck className="text-white" />
                </div>
                <li className="text-accent-50 font-semibold">List Booking</li>
              </div>
            ) : (
              <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                <div className="p-2">
                  <BookCheck />
                </div>
                <li className="text-gray-400">List Booking</li>
              </div>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
