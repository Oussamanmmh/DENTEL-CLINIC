import Image from "next/image";
import facebook from "../../public/assets/facebook.png"
import instagram from "../../public/assets/instagram.png"
import linkedin from "../../public/assets/linkedin.png"
import Link from "next/link";

export default function Footer(){
    return(
        <>
        <footer className="flex flex-col px-10 py-4 gap-6 justify-between items-center bg-gray-900 text-white">
            <div className="flex flex-col md:flex-row  gap-6 justify-between items-center w-full">
                <div className="flex  flex-col gap-6 ">
                    <a  href="mailto:contactmenmh@gmail.com" className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span>oussamacontact@gmail.com</span>

                    </a>
                    <a  href="tel:0667895276" className="flex gap-4">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <span>+312-667895276</span>

                    </a >
                    <a href="https://www.google.com/maps/place/Suisse/@46.7440672,5.2112587,6.74z/data=!4m15!1m8!3m7!1s0x478c64ef6f596d61:0x5c56b5110fcb7b15!2sSuisse!3b1!8m2!3d46.818188!4d8.227512!16zL20vMDZtenA!3m5!1s0x478c64ef6f596d61:0x5c56b5110fcb7b15!8m2!3d46.818188!4d8.227512!16zL20vMDZtenA?entry=ttu" className="flex gap-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span>localisation</span>

                    </a>
                </div>
                <div>
                <ul className="gap-6 grid grid-cols-2 text-center">
                                <li><Link className="link_nav hover:after:bg-white" href="/">Accueil</Link></li>
                                <li><Link className="link_nav hover:after:bg-white" href="/propos_de_nous">A propos de nous</Link></li>
                                <li><Link className="link_nav hover:after:bg-white" href="/contacts">Contactez nous</Link></li>
                                <li><Link className="link_nav hover:after:bg-white" href="/clients">Nos Clients</Link></li>
                            </ul>
                </div>
                <div className="flex  gap-6">
                    <a>
                        <Image src={facebook} alt="facebook" className="size-10"/>

                    </a>
                    <a>
                        <Image src={instagram} alt="instagram" className="size-10"/>

                    </a>
                    <a>
                        <Image src={linkedin} alt="linkedin" className="size-10"/>

                    </a>

                </div>
                </div>
                <p className="text-center text-gray-500 text-sm">
  &copy; 2024 OUSSAMA. All rights reserved.
</p>

        </footer>
        </>
    )
}