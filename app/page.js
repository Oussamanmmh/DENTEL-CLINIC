"use client"
import Image from "next/image";
import Alert from "./_components/alert";
import Buttondetails from "./_components/buttondetails";
import DetailsPage from "./_components/detailsSection";
import HoraireSection from "./_components/horaire";
import ServicesSection from "./_components/services/services";
import { motion } from "framer-motion";
import { Video } from "./video";
import Link from "next/link";

export default function Home() {
 
  return (
    // style={{ background: "url(https://www.cliniquehygienedentaire.ch/wp-content/uploads/2023/10/couverture.jpg)", backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(8px)" }}
    <main className="flex flex-col  md:justify-between   overflow-y-scroll xs:gap-20 gap-10    " >
      
      <div 
         
         className=" gap-36 flex md:gap-20 md flex-col   relative h-screen   text-slate-50 justify-center items-center">
        <div className="text-4xl xs:text-5xl md:text-6xl  font-josefin font-bold  text-center space-y-4  ">
          <h1 className="mt-8 "  >Bienvenue au Cabinet Dentaire du Dr Oussama.</h1 >

          <p 
            
            className="xs:text-2xl text-lg font-rubik text-gray-500 ">Nos soins, votre histoire</p>
         </div>
            {/* <p className="text-sm text-center font-josefin xs:mt-16 text-black font-bold shadow-xl backdrop-blur-sm  px-3  leading-loose"
             
            >
              Nous nous engageons à fournir des soins dentaires de haute qualité dans un environnement convivial et apaisant. Notre objectif est de garantir le bien-être de nos patients en offrant des traitements personnalisés et adaptés à chaque besoin spécifique. Nous utilisons des technologies de pointe et des techniques innovantes pour assurer des résultats optimaux et durables. Notre équipe dévouée et expérimentée veille à ce que chaque visite soit une expérience positive, en mettant un point d'honneur à créer une atmosphère chaleureuse et rassurante. Que ce soit pour un simple contrôle, un traitement préventif ou des soins plus complexes, nous sommes là pour vous accompagner à chaque étape et vous aider à maintenir un sourire éclatant et en bonne santé.
            </p> */}
            <div className="flex justify-center gap-20 ">
            <Buttondetails/>
            <Link href="/rdv" className="rounded-xl border-2  py-2 px-3 font-semibold bg-accent text-black ">Rendez-vous</Link>
        </div>
       <Video/>

      </div>
      
     
      <DetailsPage/>
      <motion.h1
       initial={{opacity:0 , x:-50}}
       whileInView={{opacity:1 , x:0}}
       viewport={{margin:"-100px"}}
       transition={{duration:0.5}}
       className="text-5xl font-josefin px-10 text-center" id="services">Voici nos Services !</motion.h1>
      <ServicesSection/>
     
      <HoraireSection/>
      {/* <Testimonials/> */}
      
    </main>
  );
}
