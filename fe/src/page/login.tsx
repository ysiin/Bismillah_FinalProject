import { Link } from "react-router"

import AuthCard from "@/components/Auth-Card"
import AuthInput from "@/components/ui/authInput"
import AuthPasswordInput from "@/components/ui/passwordInput"


export default function Login(){
    return(
        <>
        <h1>Login Page</h1>
        <div className="flex justify-center">
        <Link to="/" className="text-center mt-20 text-3xl"><span className="font-bold">Book</span>Base</Link>
        </div>
        <AuthCard title="Login">
            <AuthInput label="Username or Email" type="text"/>
            <AuthPasswordInput label="Password" type="password"/>

        </AuthCard>
        </>
        
    )
}