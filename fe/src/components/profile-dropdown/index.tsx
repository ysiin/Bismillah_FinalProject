import { Link } from "react-router";

import { ChevronDown, ChevronUpIcon, UserIcon } from "lucide-react";
import { useState } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center gap-2 pb-2"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <UserIcon />
        <p>Jane Doe</p>
        {open ? <ChevronUpIcon /> : <ChevronDown />}
      </div>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute right-2 top-26  w-60 border border-gray-700 rounded-md bg-gray-50 shadow-lg flex flex-col gap-4 p-4 z-10"
        >
          <div className="flex flex-col gap-1 items-center">
            <UserIcon height={40} width={40} className="" />
            <p className="text-center font-semibold">Guest</p>
          </div>
          <hr className="text-gray-900" />
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
        </div>
      )}
    </>
  );
}
