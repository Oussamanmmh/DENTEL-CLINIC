"use client"
import { useState  } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../_components/spinner";
import Alert from "../_components/alert";
export default function ContactForm (){
          
    const {register, handleSubmit, reset,formState: { errors }} = useForm();
    const [loading , setLoading] = useState(false)
    const [alt , setAlt] = useState(false)
    const inputFields = [
        { name: "nom", placeholder: "Nom", validation: { required: { value: true, message: "Le nom est obligatoire" }, pattern: { value: /^[A-Za-z]+$/i, message: "Le nom doit contenir que des lettres" } } },
        { name: "prenom", placeholder: "Prénom", validation: { required: { value: true, message: "Le prénom est obligatoire" } } },
        { name: "email", placeholder: "Email", validation: { required: { value: true, message: "L&apos;email est obligatoire" }, pattern: { value: /^\S+@\S+$/i, message: "L&apos;email n&apos;est pas valide" } } },
    ]
    const onSubmit=  async(data)=>{
        try {
            setLoading(true)
            console.log(data)
            const response = await fetch('/api/sendmessage', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            })
            console.log(response)
            console.log("befor:"+alt)
            setLoading(false)
            setAlt(true)
            console.log("after:"+alt)
            reset()
    }
    catch(e){
        console.log(e)
    }
    finally{
        setLoading(false)
    }
}
    return(
        <>
             <div className=" rounded-xl py-5 shadow-none relative ">
                <form className="rdv_form " onSubmit={handleSubmit(onSubmit)}>
                    {inputFields.map((field, index) => (
                        <div className="flex flex-col relative w-full items-center justify-center " key={index}>
                            <input
                                key={field.name}
                                type={field.type || "text"}
                                placeholder={field.placeholder}
                                className="input-field bg-muted"
                                {...register(field.name, field.validation)}
                            />
                            {errors[field.name] && (
                                <p className="text-red-500 text-xs font-semibold absolute bottom-0 inset-11 text-start left-4 md:text-center">
                                    {errors[field.name].message}
                                </p>
                            )}
                        </div>
                    ))}
                        
                    <div className='flex flex-col  items-center justify-center  w-full  relative  '>
                        <textarea
                             
                            placeholder="Votre message"
                            className=" bg-muted input-field px-4 py-2 w-full md:w-1/2 h-32 resize-none rounded-lg outline-none"
                            {...register("message", { required: { value: true, message: "Votre message est obligatoire !" } })}/>
                            {errors.message && (
                                <p className="text-red-500 text-xs font-semibold absolute bottom-0 inset-32 text-start left-4  md:right-4 md:text-center  ">
                                 {errors.message.message} 
                              

                           </p>
                            )}
                              
                    </div> 
              
                    <button disabled={loading} className={`btn-primary rounded bg-accent px-6 text-sm font-rubik font-semibold py-2`} type="submit">
                        {loading ?"Envoye...":"Envoyer"}
                    </button>
                    
                            
                    {
                        loading &&(
                           <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50'>
                                <Spinner/>
                           </div>
                        )
                        
                    }
                    
                </form>
              {console.log("this is alt" +alt)}
              {alt &&(<div>  <Alert show={alt} message={"Votre message a été envoyé."}/>
              </div>)}
                
               
            </div>
        </>
    )
}