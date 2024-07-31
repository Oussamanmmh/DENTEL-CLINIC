import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import NavBar from "./_components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr OUSSAMA",
  description: "Clinique de Dr OUSSAMA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${inter.className}  `}>
          
          <NavBar/>
        
        {children}
        <footer>
        <Footer/>
      </footer>
        
        </body>
      
    </html>
  );
}
