import { Link, useNavigate } from "react-router";
import { useState } from "react";

import AuthCard from "@/components/Auth-Card";
import AuthInput from "@/components/ui/authInput";
import AuthPasswordInput from "@/components/ui/passwordInput";
import { ArrowBigLeft } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // ambil semua akun dari localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

    // cek username sudah ada atau belum
    // if (accounts.some((u: any) => u.username === username)) {
    //   alert("Username sudah dipakai!");
    //   return;
    // }

    // tambahkan akun baru
    accounts.push({ username, email, password });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Register berhasil, silakan login!");
    navigate("/login"); 
  };

  return (
    <>
      <Link to="/login">
        <div className="bg-accent-50 w-12 h-12 flex justify-center items-center rounded-4xl">
          <ArrowBigLeft
            width={30}
            height={30}
            className="text-white stroke-1"
          />
        </div>
      </Link>

      <div className="flex justify-center">
        <div className="text-center mt-20 text-3xl">
          <span className="font-bold">Book</span>Base
        </div>
      </div>

      <AuthCard title="Register" onSubmit={handleRegister}>
        <AuthInput
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInput
          label="Email"
          type="text"
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
