import RdvForm from "./rdvform";

export default function RdvPage() {
  return (
    <div className="flex flex-col gap-6 text-center bg-muted ">
      <h1 className="text-5xl font-josefin">Notre Clinique vous souhaite le bienvenue !</h1>
     
      <RdvForm/>
    </div>
  );
}