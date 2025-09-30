import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import AuthCard from "@/components/Auth-Card";
import AuthInput from "@/components/ui/authInput";

import AuthPasswordInput from "@/components/ui/passwordInput";
import { ArrowBigLeft } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const account = [
    { username: "suri", password: "1234" },
    { username: "john", password: "5678" },
  ];

  useEffect(() => {
    if (!localStorage.getItem("accounts")) {
      localStorage.setItem("accounts", JSON.stringify(account));
    }
  }, []);

  const handleLogin = () => {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts") || "[]");

    const user = storedAccounts.find(
      (acc: { username: string; password: string }) =>
        acc.username === username && acc.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login berhasil!");
      toast("Login berhasil!", {
        description: `Selamat datang ${user.username}`,
        action: {
          label: "OK",
          onClick: () => console.log("User acknowledged"),
        },
      });

      navigate("/");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <>
      <Link to="/">
        <div className="bg-accent-50 w-12 h-12 flex justify-center items-center rounded-4xl">
          <ArrowBigLeft
            width={30}
            height={30}
            className="text-white stroke-1"
          />
        </div>
      </Link>

      <div className="flex justify-center">
        <Link to="/" className="text-center mt-20 text-3xl">
          <span className="font-bold">Book</span>Base
        </Link>
      </div>

      <AuthCard title="Login" onSubmit={handleLogin}>
        <AuthInput
          label="Username or Email"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
