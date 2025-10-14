import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUpIcon, UserIcon } from "lucide-react";
import Pfp from "../ui/loggedInPfp";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState<{ name: string; email: string } | null>(null);
  const navigate = useNavigate();

  // Ambil data user dari localStorage saat komponen dimuat
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setAccount(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAccount(null);
    navigate("/login");
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Tombol dropdown */}
      <div className="flex items-center gap-2 pb-2 cursor-pointer">
        {account ? <Pfp /> : <UserIcon />}
        <p>{account?.name ?? "Guest"}</p>
        {open ? <ChevronUpIcon /> : <ChevronDown />}
      </div>

      {/* Isi dropdown */}
      {open && (
        <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
          className="absolute right-0 top-8 w-60 border border-gray-200 rounded-md bg-white shadow-lg flex flex-col gap-4 p-4 z-10"
        >
          <Link
            to="/profile"
            className="flex flex-col gap-1 items-center p-2 hover:bg-gray-100 active:scale-95 transition-all duration-200 rounded-md"
          >
            {account ? <Pfp /> : <UserIcon height={40} width={40} />}
            <p className="text-center font-semibold">{account?.name ?? "Guest"}</p>
            {account && <p className="text-sm text-gray-500">{account.email}</p>}
          </Link>
          <hr className="border-gray-300" />

          {/* Jika belum login */}
          {!account ? (
            <div className="flex flex-col gap-2">
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
              onClick={handleLogout}
              className="text-center bg-red-500 text-white py-2 hover:bg-red-600 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
}
