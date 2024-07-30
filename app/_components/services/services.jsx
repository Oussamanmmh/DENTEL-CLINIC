
import Image from "next/image"
import services from "./servicesArray"
import { motion } from "framer-motion"

export default function ServicesSection(){
     
    return(
        <>
            <motion.div  className="grid grid-row lg:grid-cols-4 gap-6 px-3  "
              initial={{opacity:0 , x:-50}}
              whileInView={{opacity:1 , x:0}}
              viewport={{
               margin:"-200px"
              }}
              transition={{duration:0.5}}
             >
               
                    {
                         services.map((service,index) => (
                              <div key={index} className="flex items-start border gap-10 rounded-xl py-2 px-3">
                                        <Image src={service.image} alt={service.title} height={50} width={50} className="size-10"/>
                                        <div className="flex flex-col gap-4">
                                        <h1 className="font-bold font-josefin text-2xl">{service.title}</h1>
                                        <p className="font-josefin text-lg">
                                             {service.description}
                                        </p>
                              </div>
                         </div>
                         ))
                    }
            </motion.div>
        </>
    )
}