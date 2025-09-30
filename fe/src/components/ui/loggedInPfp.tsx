import pfpImage from '../../assets/LoggedInPfp.png'
export default function Pfp(){
    return(
        <>
        <img src={pfpImage} alt="" className='w-8 rounded-full object-cover' />
        </>
        )
}