import Image from "next/image"
import error from "../public/assets/error.jpg"
export default function NotFound (){
    return(
        <div className="flex flex-col items-center py-10">
                    <h1 className="text-5xl text-center font-josefin text-red-500 ">Cette page sera disponible plus tôt !</h1>
        <Image width={100} height={100} src={error} className="w-80 h-96"  alt={"pending"} />
        </div>
    )
}