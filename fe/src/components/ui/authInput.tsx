interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function AuthInput({ label, className, ...props }: AuthInputProps) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        {...props}
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