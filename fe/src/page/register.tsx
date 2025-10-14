import { Link, useNavigate } from "react-router";
import { useState } from "react";

import AuthCard from "@/components/Auth-Card";
import AuthInput from "@/components/ui/authInput";
import AuthPasswordInput from "@/components/ui/passwordInput";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

    if (accounts.some((u: any) => u.username === username)) {
      alert("Username sudah dipakai!");
      return;
    }

    accounts.push({ username, email, password });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Register berhasil, silakan login!");
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-center">
        <Link to="/" className="text-center mt-20 text-3xl">
          <span className="font-bold">Book</span>Base
        </Link>
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
