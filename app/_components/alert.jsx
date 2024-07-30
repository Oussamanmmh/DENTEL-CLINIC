"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import done from "/public/assets/done.png";
import { useRouter } from "next/navigation";

export default function Alert({ show, message }) {
    const router = useRouter();
  const [alert, setAlert] = useState(show);
  const closeAlert = () => {
    setAlert(false);
      router.push('/')
    
  };

  return (
    <AnimatePresence>
      {alert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-1/2 w-full left-0 md:w-1/2 bg-gray-200 md:translate-x-1/2 backdrop-blur-xl rounded-2xl py-2 px-4 flex flex-col justify-center"
        >
          <div className="flex justify-end" onClick={() => closeAlert()}>
            <button className="flex rounded-full border border-red-600 w-10 h-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="max-w-7xl mx-auto py-2 px-3 flex flex-col gap-4 items-center justify-center">
            <Image width={100} height={100} src={done} alt="done" className="size-10" />
            <p className="font-josefin font-bold text-start">{message}</p>
            <button
              className="rounded-2xl py-2 px-4 w-40 bg-green-500 font-bold"
              onClick={() => closeAlert()}
            >
              Ok
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
