"use client"
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function ListRdvs() {
  const [rdvs, setRdvs] = useState([]);

  useEffect(() => {
    const fetchRdvs = async () => {
      try {
        const colleRef = collection(db, 'rdvs');
        const querySnapshot = await getDocs(colleRef);
        const rdvsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRdvs(rdvsList);
      } catch (error) {
        console.error('Error fetching RDVs: ', error);
      }
    };

    fetchRdvs();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-josefin mb-4 text-center">Bonjour Dr OUSSAMA!</h1>
        <h2 className="text-3xl font-josefin mb-6">Voici votre liste des patients pour Aujourd&apos;hui</h2>
        <div className="overflow-x-auto">
                <div className='flex  justify-between  items-center '>
                     <input placeholder='Recherche ' className='px-4 py-2 bg-muted rounded-xl  outline-none w-1/2'/>
                        <label className='flex items-center' >
                            <span className='text-sm hidden md:block font-semibold font-josefin'>Filtre par date: </span>
                            <input type='date' className='bg-muted rounded-xl px-4 py-2' />
                           
                            
                        </label>
                </div>
          <table className="min-w-full bg-white border border-gray-200 mt-5">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Prénom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Téléphone</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Note</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {rdvs.map((rdv) => (
                <tr key={rdv.id} className="text-center">
                  <td className="py-2 px-4 border-b">{rdv.nom}</td>
                  <td className="py-2 px-4 border-b">{rdv.prenom}</td>
                  <td className="py-2 px-4 border-b">{rdv.email}</td>
                  <td className="py-2 px-4 border-b">{rdv.telephone}</td>
                  <td className="py-2 px-4 border-b">{rdv.date}</td>
                  <td className="py-2 px-4 border-b">{rdv.note.substring(0,40)}</td>
                  <td className="py-2 px-4 border-b">{rdv.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
