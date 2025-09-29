import AuthButton from "../ui/authButton";
import { Link } from "react-router";

interface AuthCardProps {
  title: "Login" | "Sign Up";
  children?: React.ReactNode;
}

export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <>
      <form className="bg-white rounded-xl border border-gray-400 max-w-md mx-auto space-y-4 mt-20 p-8">
        <h2 className="font-semibold text-2xl text-center mb-16">{title}</h2>
        {children}
        <AuthButton text={title}></AuthButton>

        {title === "Login" ? (
          <>
            <p className="text-sm text-center pt-4">
              Belum Memiliki Akun?{" "}
              <Link to="/register" className="text-blue-500">
                Sign Up
              </Link>{" "}
            </p>
          </>
        ) : (
          <>
            <p className="text-sm text-center pt-4">
              Sudah Memiliki Akun?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </>
        )}
      </form>
    </>
  );
}
