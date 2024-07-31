import facebook from "../../public/assets/facebook.png"
import instagram from "../../public/assets/instagram.png"
import email from "../../public/assets/email.png"
import whats from "../../public/assets/whatsapp.png"
import Image from "next/image"
import ContactForm from "./contactForm"
import Alert from "../_components/alert"
import { Suspense } from "react"
export default function ContactPage(){
    const contacts =[
        {
            contact : "Facebook" ,
            img : facebook
        },
        {
            contact : "Instagram" ,
            img : instagram
        },
        {
            contact : "Email" ,
            img : email
        },
        {
            contact : "WhatsApp" ,
            img : whats
        }
    ]
    return(
        <>
           <div className="text-center px-10 flex flex-col gap-10 py-10">
                    <div>
                        <h1 className="text-5xl font-josefin font-bold ">Contactez-nous.</h1>
                        <h2 className="text-3xl text-gray-700 font-josefin font-semibold ">Si vous avez des questions, n'hésitez pas à les poser</h2>
                    </div>
                <div className="flex flex-col md:flex-row gap-20 justify-between"> 
                        <div className="flex flex-col gap-16 items-center  w-full">  
                                <h1 className="text-xl font-josefin">Vous pouvez nous trouver ici : </h1>
                              <Suspense fallback={<h1>loading</h1>}>
                                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5390513.149520045!2d4.014700623264071!3d46.57819346124324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSuisse!5e0!3m2!1sfr!2sdz!4v1722282329005!5m2!1sfr!2sdz"  className="rounded-2xl w-full md:w-full" width={600} height={300} style={{border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </Suspense> 

                        </div>
                        <div>
                            <h1 className="text-xl font-josefin">Contactez-nous via :</h1>
                                <div className="flex flex-col gap-10  w-full px-10 py-8  items-center">
                                    {
                                        contacts.map((cnt , index)=>{
                                            return (
                                                <a className="flex items-center text-start gap-10  px-4 py-2 hover:bg-gray-400 rounded-2xl" key={index} href="/">
                                                    <p className="font-josefin text-lg font-semibold w-32">{cnt.contact}</p>
                                                    <Image height={50} width={50} src={cnt.img} alt={cnt.contact}></Image>

                                                </a>
                                            )
                                        })
                                    }

                                </div>
                            

                        </div>
                </div>
                <div>
                                    <h3 className="text-xl font-josefin" >Ou laissez un message directement ici :</h3>
                                    <ContactForm/>
                                  
                </div>
           </div>
        </>
    )
}