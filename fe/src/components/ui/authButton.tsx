// AuthButton.tsx
interface AuthButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function AuthButton({
  text,
  type = "button",
  onClick,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 bg-accent-50 text-white rounded-lg cursor-pointer"
    >
      {text}
    </button>
  );
}
