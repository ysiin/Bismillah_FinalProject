import { useAuth } from "@/contexts/AuthContext";
import { ChevronDown, ChevronUpIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import Pfp from "../ui/loggedInPfp";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAccount(null);
    navigate("/login");
  };

  return (
    <>
      <div
        className="flex items-center gap-10 pb-2 cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="flex flex-row gap-2 items-center ">
          {!isAuthenticated ? <UserIcon /> : <Pfp />}
          <p>{user?.name ?? "Guest"}</p>
        </div>
        {open ? <ChevronUpIcon /> : <ChevronDown />}
      </div>

      {/* Isi dropdown */}
      {open && (
        <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
          className="absolute right-0 top-8 w-60 border border-gray-200 rounded-md bg-white shadow-lg flex flex-col gap-4 p-4 z-10"
        >
          <div className="flex flex-col gap-1 items-center">
            {!isAuthenticated ? <UserIcon height={40} width={40} /> : <Pfp />}
            <p className="text-center font-semibold">{user?.name ?? "Guest"}</p>
          </div>
          <hr className="text-gray-900" />

          {!isAuthenticated ? (
            <div className="flex flex-col gap-1">
              <Link to="/login">
                <p className="text-center bg-blue-600 text-white py-2 hover:bg-blue-700 rounded-md">
                  Login
                </p>
              </Link>
              <Link to="/register">
                <p className="text-center py-2 border rounded-md hover:bg-gray-100">
                  Register
                </p>
              </Link>
            </div>
          ) : (
            // Jika sudah login
            <button
              onClick={logout}
              className="text-center bg-red-500 text-white py-2 hover:bg-red-700 rounded-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
}
