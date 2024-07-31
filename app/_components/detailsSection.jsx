import Image from "next/image";
import clin1 from "../../public/assets/clin1.jpg";
import clin2 from "../../public/assets/clin2.jpg";
import clin3 from "../../public/assets/clin3.jpg";
import clin4 from "../../public/assets/clin4.jpg";
import { motion } from "framer-motion";
export default function DetailsPage(){


    return(
        <>
        <section id="details"  >
            <div className="flex flex-col gap-20">
                <motion.p
                     initial={{opacity:0 , x:-50}}
                     whileInView={{opacity:1 , x:0}}
                     viewport={{margin:"-100px"}}
                     transition={{duration:0.5}}

                 className="text-2xl text-center font-josefin font-semibold">Notre clinique est équipée d&apos;installations modernes et puissantes, conçues pour offrir les meilleurs soins dentaires possibles.</motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white uppercase font-josefin">
                    <div className="relative gallery  ">
                        <Image src={clin1} alt="clinique" className="w-full h-96 object-cover rounded-2xl cursor-pointer after:content-['vootre']  " />
                        <p className="opacity-1 absolute top-[50%] right-[50%] text-2xl  font-bold opacity-0" >Votre</p>
                    </div> 
                    <div className="relative gallery ">
                        <Image src={clin2} alt="clinique" className="w-full h-96 object-cover rounded-2xl cursor-pointer" />
                        <p className="opacity-1 absolute top-[50%] right-[50%] text-2xl  font-bold opacity-0" >sourire</p>

                    </div>
                    <div className="relative gallery ">
                        <Image src={clin3} alt="clinique" className="w-full h-96 object-cover rounded-2xl cursor-pointer" />
                        <p className="opacity-1 absolute top-[50%] right-[50%] text-2xl  font-bold opacity-0" >notre</p>

                    </div>
                    <div className="relative gallery ">
                        <Image src={clin4} alt="clinique" className="w-full h-96 object-cover rounded-2xl cursor-pointer" />
                        <p className="opacity-1 absolute top-[50%] right-[50%] text-2xl  font-bold opacity-0" >passion</p>

                    </div>
            </div>

            </div>
            {/* <div className=" py-10 flex justify-between px-4 items-center">
               
                <div className="flex flex-col justify-center items-center text-center">
                    <Image src={med} alt="medical"  className="size-20"/>
                    <p className="text-2xl font-josefin">Prendre rendez-vous</p>
                    <a href="/rendez-vous" className="rounded-xl border-2  py-2 px-3 font-semibold ">Rendez-vous</a>

                    
                </div>
            </div> */}

        </section>
        </>
    )
}