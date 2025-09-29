import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthPasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function AuthPasswordInput({
  label = "Password",
  className,
  ...props
}: AuthPasswordInputProps) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="text-sm text-gray-200 hover:underline flex items-center gap-1 cursor-pointer"
        >
          {show ? (
            <>
              <EyeOff size={16} /> Hide
            </>
          ) : (
            <>
              <Eye size={16} /> Show
            </>
          )}
        </button>
      </div>

      <input
        {...props}
        type={show ? "text" : "password"}
        className={`
          w-full rounded-md border border-gray-300 px-3 py-2
          text-sm shadow-sm placeholder-gray-400
          focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 mb-4
          ${className || ""}
        `}
      />
    </div>
  );
}
