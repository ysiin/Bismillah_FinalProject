import { Link, useNavigate } from "react-router";
import { useState} from "react";
import { toast } from "sonner";
import { loginUser } from "@/axios/api";

import AuthCard from "@/components/Auth-Card";
import AuthInput from "@/components/ui/authInput";
import AuthPasswordInput from "@/components/ui/passwordInput";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // ganti username → email
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      console.log("RESPON LOGIN:", res);
      if (res.success) {
        // simpan user & token ke localStorage
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        toast("Login berhasil!", {
          description: `Selamat datang ${res.user.name}`,
          action: {
            label: "OK",
            onClick: () => navigate("/"),
          },
        });

        navigate("/");
      } else {
        toast("Login gagal!", {
          description: res.message || "Email atau password salah.",
        });
      }
    } catch (err: any) {
      toast("Login gagal!", {
        description: err.response?.data?.message || "Terjadi kesalahan server.",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <Link to="/" className="text-center mt-20 text-3xl">
          <span className="font-bold">Book</span>Base
        </Link>
      </div>

      <AuthCard title="Login" onSubmit={handleLogin}>
        <AuthInput
          label="Username or Email"
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
    </div>
  );
}
