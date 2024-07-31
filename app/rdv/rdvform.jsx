'use client'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { db } from '../firebase';
import { collection , doc ,addDoc, serverTimestamp} from 'firebase/firestore';
import Spinner from '../_components/spinner';
import Alert from '../_components/alert';
export default function RdvForm() {
    
    const {register, handleSubmit, reset,formState: { errors }} = useForm();
    const [loading , setLoading] = useState(false)
    const [alt , setAlt] = useState(false)
   
    const [checked, setChecked] = useState(false)

    const inputFields = [
        { name: "nom", placeholder: "Nom", validation: { required: { value: true, message: "Le nom est obligatoire" }, pattern: { value: /^[A-Za-z]+$/i, message: "Le nom doit contenir que des lettres" } } },
        { name: "prenom", placeholder: "Prénom", validation: { required: { value: true, message: "Le prénom est obligatoire" } } },
        { name: "email", placeholder: "Email", validation: { required: { value: true, message: "L'email est obligatoire" }, pattern: { value: /^\S+@\S+$/i, message: "L'email n'est pas valide" } } },
        { name: "telephone", placeholder: "Téléphone", validation: { required: { value: true, message: "Le téléphone est obligatoire" }, pattern: { value: /^[0-9]+$/, message: "Le téléphone doit contenir que des chiffres" } } },
    ];
    const onSubmit = async data => {
        setLoading(true)
        const currentDate = new Date();
         const rdv = collection(db , "rdvs")
         try{
       const response =  await addDoc(
            rdv , {
                ...data,
                //the current date
                resever_le: serverTimestamp(),

            }
         )
         setLoading(false)
         setAlt(true)
         reset()
        
        }
        catch(e){
            console.log(e)
        }
       finally{
        setLoading(false)
       }
         

    };

    return (
        <>
            <div className="bg-muted ">
                <h1 className="text-3xl font-josefin text-primary">Prenez votre rendez-vous</h1>
                <form className="rdv_form" onSubmit={handleSubmit(onSubmit)}>
                    {inputFields.map((field, index) => (
                        <div className="flex flex-col relative w-full items-center justify-center " key={index}>
                            <input
                                type={field.type || "text"}
                                placeholder={field.placeholder}
                                className="input-field"
                                {...register(field.name, field.validation)}
                            />
                            {errors[field.name] && (
                                <p className="text-red-500 text-xs font-semibold absolute bottom-0 inset-11 text-start left-4 md:text-center">
                                    {errors[field.name].message}
                                </p>
                            )}
                        </div>
                    ))}
                        
                    {/* <div className='flex  items-center justify-center gap-20  w-full  relative  '>
                        <p className="text-sm font-semibold text-primary">Choisissez le service ?</p>
                        <select
                            className="input-field px-4 py-2 rounded-lg"
                            {...register("service", { required: "Le service est obligatoire" })}
                        >
                            <option value="">Choisissez le service</option>
                            <option value="service1">Service 1</option>
                            <option value="service2">Service 2</option>
                            <option value="service3">Service 3</option>
                        </select>
                        {errors.service && (
                            <p className="text-red-500 text-xs font-semibold absolute bottom-0 inset-10 md:translate-x-36 mt-2 text-end right-4 md:text-center">
                                {errors.service.message}
                            </p>
                        )}
                    </div> */}

                    <div className='flex  items-center justify-center gap-20  w-full  relative  '>
                        <p className="text-sm font-semibold text-gray-700">Choisissez la date de rendez-vous ?</p>
                                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="input-field-date px-4 py-2 rounded-lg"
                                    {...register("date", {
                                    required: "La date est obligatoire",
                                    validate: (value) => {
                                        const selectedDate = new Date(value);
                                        const currentDate = new Date();
                                        // Zero out the time part for accurate comparison
                                        currentDate.setHours(0, 0, 0, 0);
                                        return selectedDate > currentDate || "La date doit être supérieure à la date actuelle";
                                    }
                                    })}
                              />
                            {errors.date && (
                                <p className="text-red-500   text-xs font-semibold absolute bottom-0 inset-10 md:translate-x-36 mt-2 text-end right-4 md:text-center">
                                    {errors.date.message}
                                </p>
                            )}
                    </div>
                    {/*add note*/}
                    <div className='flex  items-center justify-center gap-20  w-full  relative  '>
                        <textarea
                             
                            placeholder="Note"
                            className="input-field px-4 py-2 w-full md:w-1/2 h-32 resize-none rounded-lg outline-none"
                            {...register("note")}
                        />
                    </div> 
                    <div>
                           <label className='flex items-center justify-center text-start '>
                                <input type="checkbox" className='size-4 ' onChange={()=>setChecked(!checked)}/>
                                <span className='text-xs text-gray-500 inline'>
                                    En cochant cette case, j&apos;accepte nos conditions de facturation concernant les RDV manqués non décommandés au moins 24h à l&apos;avance

                                </span>
                           </label>
                    </div>
                    <button disabled={!checked} className={`btn-primary rounded ${checked ? "bg-accent": "bg-gray-400"}  px-6 text-sm font-rubik font-semibold py-2`} type="submit">
                        {loading ?"Envoye...":"Envoyer"}
                    </button>
                            
                    {
                        loading &&(
                           <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50'>
                                <Spinner/>
                           </div>
                        )
                        
                    }
                    {
                        alt &&(
                            
                                <div className=' fixed h-screen w-screen z-50'>
                                <Alert show={alt} message={"Votre rendez-vous a été pris avec succès."}  />
                                </div>
                        )
                    }

                </form>
                
            </div>
        </>
    );
}
