import { Link } from "react-router"

import AuthCard from "@/components/Auth-Card"
import AuthInput from "@/components/ui/authInput"
import AuthPasswordInput from "@/components/ui/passwordInput"


export default function SignUp(){
    return(
        <>
        <h1>Sign Up Page</h1>
        <div className="flex justify-center">
        <Link to="/" className="text-center mt-20 text-3xl"><span className="font-bold">Book</span>Base</Link>
        </div>
        <AuthCard title="Sign Up">
            <AuthInput label="Username" type="text"/>
            <AuthInput label="Email" type="text"/>
            <AuthPasswordInput label="Password" type="password"/>
        
        </AuthCard>
        </>
    )
}