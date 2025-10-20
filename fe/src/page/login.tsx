import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";

import AuthCard from "@/components/Auth-Card";
import AuthInput from "@/components/ui/authInput";
import AuthPasswordInput from "@/components/ui/passwordInput";
import { useAuth } from "@/contexts/AuthContext";
import api from "@/axios/api";
import ImgBook from "@/assets/buku.png";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });

      if (response.data.success) {
        const { user, token } = response.data;

        await login(user, token);

        toast.success("Login berhasil!", {
          description: `Selamat datang ${user.name}`,
        });

        if (user.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        toast.error("Login Gagal", {
          description: response.data.message || "Email atau password salah!",
        });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.message || "Terjadi kesalahan saat login.";
      toast.error("Login Gagal", {
        description: errorMessage,
      });
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="flex justify-center">
        {/* <Link to="/" className="text-center mt-20 text-3xl"> */}
        <div className="flex gap-2.5 items-center mt-20 justify-center">
          <img src={ImgBook} className="w-18 h-14" />
          <div className="text-center text-3xl">
            <span className="font-bold text-3xl">Book</span>Base
          </div>
        </div>
        {/* </Link> */}
      </div>

      <AuthCard title="Login" onSubmit={handleLogin}>
        <AuthInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthPasswordInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthCard>
    </>
  );
}
