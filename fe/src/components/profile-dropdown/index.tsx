import { Link } from "react-router";
import { useEffect } from "react";
import { ChevronDown, ChevronUpIcon, UserIcon } from "lucide-react";
import { useState } from "react";

import Pfp from "../ui/loggedInPfp";


export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
 const [account, setAccount] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      setAccount(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <div
        className="flex items-center gap-2 pb-2"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {!account ? (<UserIcon />):(<Pfp/>)}

        <p>{account?.username ?? "Guest"}</p>
        {open ? <ChevronUpIcon /> : <ChevronDown />}
      </div>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute right-2 top-26  w-60 border border-gray-700 rounded-md bg-gray-50 shadow-lg flex flex-col gap-4 p-4 z-10"
        >
          <div className="flex flex-col gap-1 items-center">
            {!account ? (<UserIcon height={40} width={40} />):(<Pfp/>)}
            <p className="text-center font-semibold">{account?.username ?? "Guest"}</p>
          </div>
          <hr className="text-gray-900" />

        {!account ?(
          <div className="flex flex-col gap-1">
            <Link to="/login">
              <p className="text-center bg-button text-white py-2 hover:bg-button-hover rounded-sm">
                Login
              </p>
            </Link>
            <Link to="/register">
              <p className="text-center rounded-sm py-2 hover:bg-gray-200">
                Register
              </p>
            </Link>
          </div>
        ):(
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            setAccount(null);
          }}
          className="text-center bg-red-500 text-white py-2 hover:bg-red-700 rounded-sm"
        >
          Logout
        </button>
        )
      }
        </div>
      )}
    </>
  );
}
