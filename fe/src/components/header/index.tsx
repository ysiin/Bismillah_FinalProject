import {
  BookCheck,
  Bot,
  ChartBarStacked,
  HouseIcon,
  LayoutDashboard,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@/contexts/AuthContext";
import ImgBook from "@/assets/buku.png";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user } = useAuth();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="py-10 px-4">
          <div className="flex gap-2.5 items-center justify-center">
            <img src={ImgBook} className="w-18 h-14" />
            <div className="text-center text-3xl">
              <span className="font-bold text-3xl">Book</span>Base
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          {user?.role === "admin" ? (
            <Link to="/dashboard">
              {currentPath === "/dashboard" ? (
                <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                  <div className="bg-[#0C56F2] rounded-2xl p-2">
                    <LayoutDashboard className="text-white" />
                  </div>
                  <li className="text-accent-50 font-semibold">Dashboard</li>
                </div>
              ) : (
                <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                  <div className="p-2">
                    <LayoutDashboard />
                  </div>
                  <li className="text-gray-400">Dashboard</li>
                </div>
              )}
            </Link>
          ) : (
            <>
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
                    <li className="text-gray-400">Discover</li>
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
                    <li className="text-accent-50 font-semibold">
                      List Booking
                    </li>
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
              <Link to="/chat-bot">
                {currentPath === "/chat-bot" ? (
                  <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                    <div className="bg-[#0C56F2] rounded-2xl p-2">
                      <BookCheck className="text-white" />
                    </div>
                    <li className="text-accent-50 font-semibold">
                      List Booking
                    </li>
                  </div>
                ) : (
                  <div className="flex flex-row px-4 py-2 items-center gap-2.5">
                    <div className="p-2">
                      <Bot />
                    </div>
                    <li className="text-gray-400">ChatBot</li>
                  </div>
                )}
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
