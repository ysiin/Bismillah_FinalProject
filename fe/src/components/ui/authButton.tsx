
interface AuthButtonProps{
    text: string

}

export default function AuthButton({text} : AuthButtonProps){
    return(
        <>
            <button className="w-full bg-accent-50 text-white rounded-xl py-2">{text}</button>
        </>
    )
}