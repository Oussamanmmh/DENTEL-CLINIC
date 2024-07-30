import Image from "next/image";
import StarsRating from "./starsRating";
import { useRouter } from "next/navigation";

export default function CardReview({ review }) {
    const router = useRouter();
return (
    <div className="cursor-pointer border py-2" onClick={() => window.open(review.link, "_blank")}>
            <div className="flex items-center justify-between "> 
                            <div className="flex items-center gap-4">
                                            <Image src={review.user.thumbnail} alt="profile" width={50} height={50} className="w-16 h-16 object-cover rounded-full cursor-pointer" />
                                            <div className="flex flex-col">
                                                        <h1 className="font-josefin font-bold text-xl">{review.user.name}</h1>
                                                        <h3 className="text-sm">{review.date} {review.source}</h3>
                                            </div>
                            </div>

                            <StarsRating rating={review.rating} />
                                    
            </div>
            <p className="text-sm font-josefin text-center">{review.snippet}</p>
     
    </div>
);
}