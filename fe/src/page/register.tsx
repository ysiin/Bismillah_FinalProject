import { Link } from "react-router";

import AuthCard from "@/components/Auth-Card";
import AuthInput from "@/components/ui/authInput";
import AuthPasswordInput from "@/components/ui/passwordInput";
import { ArrowBigLeft } from "lucide-react";

export default function Register() {
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
      <AuthCard title="Sign Up">
        <AuthInput label="Username" type="text" />
        <AuthInput label="Email" type="text" />
        <AuthPasswordInput label="Password" type="password" />
      </AuthCard>
    </>
  );
}
