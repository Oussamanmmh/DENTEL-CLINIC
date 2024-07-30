import Reviews from "../_components/reviews";

export default function ClientPage(){
    return(
        <>
            <div className="flex flex-col gap-10 px-2 py-10">   
                        <h1 className="text-3xl font-josefin text-center p-2">Nos clients toujour satisfait</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4 items-center">
                                  <input placeholder="Commentaire " className=" w-full px-4 py-2 bg-muted rounded-xl  outline-none "/>
                                 <button className="bg-primary text-white px-4 py-2 rounded-xl w-1/2">Envoyer</button>
                            </div>
                            <Reviews/>
                            
                        </div>
            </div>
        </>
    )
}