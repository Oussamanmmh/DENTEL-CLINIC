import nodemailer from 'nodemailer';

import { NextResponse } from "next/server"

export  async function POST(req , res) {
   const {nom , prenom , email , message} = await req.json()
   console.log(nom , prenom , email , message)
   const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:"contactmenmh@gmail.com",
      pass:"gmkk jvhm wvar ahiu"
    },
  });
  const mailOptions = {
    from: "oussamanmamcha@gmail.com",
    to:"mo_nemamcha@esi.dz", // List of receivers
    subject:"Message d'un client", // Subject line
    text: `Message: ${message}\n\nLe nom du client : ${nom} ${prenom}\nEmail: ${email}`,    
     // Plain text body
  };

   try{
   const mail= await transporter.sendMail(mailOptions);

   console.log(mail)
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } 
   
   catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: error }), {
      status:500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
    
}