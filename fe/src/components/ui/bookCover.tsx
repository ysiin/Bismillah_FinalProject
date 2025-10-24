import bookImg from "@/assets/img2.jpg"

export default function BookCover(){
    return(
        <>
        <img src={bookImg} 
            alt="cover" 
            className="w-36 h-50 object-contain"/>
        </>
    )
}