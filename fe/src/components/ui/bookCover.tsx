

export default function BookCover({ bookUrl} : {bookUrl : string}){
    return(
        <>
        <img src={bookUrl} 
            alt="cover" 
            className="w-36 h-50 object-contain"/>
        </>
    )
}