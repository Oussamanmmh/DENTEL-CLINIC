"use client"
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { useState } from "react";
import me from "../../public/assets/me.jpg"
import ServicesLink from "./serviceslink";
export default function NavBar() {
    const x = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>

    const menu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
 const [sidebarOpen , setSidebarOpen] = useState()
 const [visibleDropdown , setVisibleDropdown] = useState(false)
 
    return(
        <>
        <nav className="flex items-center justify-between pr-2 py-10  bg-muted md:bg-none md:backdrop-blur-xl max-h-44 sticky top-0 z-50 ">
                <div className="flex items-center">
                     <Image src={logo} alt="logo" width={100} height={100} className="size-20" />
                      <div className="flex flex-col font-extrabold text-2xl font-serif">
                            <h1 >Dr</h1 >
                            <h2>Oussama</h2>
                      </div>
                </div>
                <ul className="hidden md:flex gap-8 font-semibold max-h-44 items-center ">
                     <li><a className="link_nav" href="/">Accueil</a></li>
                     <li><a className="link_nav" href="/propos_de_nous">A propos de nous </a></li>
                     <li className="cursor-pointer relative services h-52 flex items-center gap-2">
                        <a className="link_nav services cursor-pointer"  >
                        Servises

                        </a>
                       
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                        <ServicesLink/>
                        </li>
                     <li><a className="link_nav" href="/contacts">Contactez nous</a></li>
                     <li><a className="link_nav" href="/clients">Nos Clients</a></li>
                     
                </ul>
                <a href="tel:0667895276 " className={`font-bold text-primary flex transition-all duration-700 text-center items-center gap-2 ${sidebarOpen ? "opacity-0": "opacity-100"}`}>
                    <span>+213-6-67-89-52</span>
                    <span className="hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                        </svg>
                     </span>
                </a>

                <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 opacity-60"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>
                      ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                    )}
                </button>
        

           
                <div className={    `fixed inset-0 flex z-40 transition-transform duration-700 ease-in-out ${!sidebarOpen ?"-translate-x-full":""}  `}>
                   
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-muted px-4">
                        <div className="absolute top-0  right-0 mr-0.5 pt-2">
                            <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setSidebarOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 animate-pulse"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-20 pb-4 overflow-y-auto flex flex-col gap-6 ">
                                        <div className="flex items-center gap-10">
                                                 <h1 className="text-2xl font-josefin font-bold">Dr OUSSAMA</h1>
                                                 <Image src={me} alt="me" width={100} height={100} className="w-16 h-16 object-cover rounded-full cursor-pointer" />
                                          </div>
                            <ul className="mt-5 px-2  space-y-10 gap-20">
                                <li><a className="link_nav" href="/">Accueil</a></li>
                                <li><a className="link_nav" href="/propos_de_nous">A propos de nous</a></li>
                                <li className="cursor-pointer flex flex-col gap-4  ">
                                    <a className="link_nav cursor-pointer flex items-center gap-20"onClick={()=>setVisibleDropdown(!visibleDropdown)} >
                                       <span>Services</span> 
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                       </svg>
                                        </a>
                                    <div className={`  pl-4  flex flex-col  transition-all ease duration-1000 text-sm  overflow-hidden   text-start gap-4 ${visibleDropdown ? "max-h-screen" : "max-h-0 "}  `} >
                                              <a href="services/orthodontie" >Orthodontie</a >
                                              <a href="services/pedodontie" >Pédodontie</a >
                                              <a href="servicec/chirurgie_buccale" >Chirurgie buccale</a>
                                              <a href="services/implantologie" >Implantologie</a >
                                              <a href="services/parodontologie" >Parodontologie</a >
                                              <a href="services/esthetique_dentaire" >Esthétique dentaire</a >
                                              <a href="services/soins_dentaire" >Soins dentaire</a >
                                              <a href="services/microscope-operatoire">Micro Operatoire </a>
                                        </div>
                                   
                                     
                                </li>
                                <li><a className="link_nav" href="/contacts">Contactez nous</a></li>
                                <li><a className="link_nav" href="/clients">Nos Clients</a></li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <hr/>
                            <a href="tel:0667895276" className="font-bold text-primary flex items-center gap-2 text-center">
                                <span>+213-6-67-89-52</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
                </div>
            
               
        </nav>
        </>
    )}