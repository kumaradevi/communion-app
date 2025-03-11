import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Communion App",
  description: "Welcome to Communion App – Your Digital Companion for Faith & Fellowship! 🙏✨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main >
        {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
