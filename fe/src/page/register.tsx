import { useNavigate } from "react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import api from "@/axios/api";

import AuthCard from "@/components/Auth-Card";
import AuthInput from "@/components/ui/authInput";
import AuthPasswordInput from "@/components/ui/passwordInput";
import ImgBook from "@/assets/buku.png";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword, // jika backend pakai confirmed
        role: "anggota", // sesuai validasi Laravel
      });

      // Laravel biasanya return 201 Created jika sukses
      if (response.status === 201 || response.data?.user) {
        toast.success("Registrasi Berhasil", {
          description: "Silakan login dengan akun Anda.",
        });
        navigate("/login");
      } else {
        toast.error("Registrasi Gagal", {
          description:
            response.data?.message || "Terjadi kesalahan pada server.",
        });
      }
    } catch (error: any) {
      console.error("Register error:", error);

      // Ambil pesan validasi Laravel
      const messages = error.response?.data?.errors
        ? Object.values(error.response.data.errors).flat().join("\n")
        : error.response?.data?.message || "Terjadi kesalahan saat registrasi.";

      toast.error("Registrasi Gagal", {
        description: messages,
      });
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />

      <div className="flex justify-center">
        {/* <Link to="/" className="text-center mt-20"> */}
        <div className="flex gap-2.5  mt-20 items-center justify-center">
          <img src={ImgBook} className="w-18 h-14" />
          <div className="text-center text-3xl">
            <span className="font-bold text-3xl">Book</span>Base
          </div>
        </div>
        {/* </Link> */}
      </div>

      <AuthCard title="Register" onSubmit={handleRegister}>
        <AuthInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <AuthPasswordInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </AuthCard>
    </>
  );
}
