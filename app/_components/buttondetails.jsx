"use client"
export default function Buttondetails(){
     const handlScroll = () => {
    const horaireElement = document.getElementById('horaire');
    if (horaireElement) {
      horaireElement.scrollIntoView({ behavior: 'smooth', top:0 });
    }
  };
    return(
        <>
        <a  className="rounded-xl border-2 py-2 px-3 font-semibold cursor-pointer border-accent text-black backdrop-blur-xl"  onClick={handlScroll} >Horaire</a>
        </>    
        )
}