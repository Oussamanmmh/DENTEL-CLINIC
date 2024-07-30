import { motion } from "framer-motion"

export default function HoraireSection(){
    return(
        <>
            <motion.div 
           
              id="horaire">
                    <div className="flex flex-col justify-center items-center text-center gap-2  rounded-2xl py-4 mx-2 border bg-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h2 className="text-5xl font-bold font-josefin">Horaires</h2>
                                <p className="text-xl font-josefin">Samedi au Jeudi</p>
                                <p className="text-lg font-josefin">8:30 - 16:00</p>
                                <p className="text-lg font-josefin">Vendredai</p>
                                <p className="text-lg font-josefin">Repos</p>

                        </div>
            </motion.div>

        </>

    )
}