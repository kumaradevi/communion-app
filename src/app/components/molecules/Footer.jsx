import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#14161F] w-full min-h-[120px] text-white mt-20">
      <div className="w-[80%] mx-auto flex flex-col gap-12 md:flex-row md:gap-0 justify-between py-8 border-b border-gray-700">
        <div className="w-full md:w-[30%] flex flex-col gap-3">
          <div className="flex gap-3 items-center ">
            <Image
              src={"/assets/communionLogo.webp"}
              width={60}
              height={60}
              alt="logo"
            />
            <h4 className="text-4xl">Communion</h4>
          </div>
          <p>
            Join a community of believers, stay connected with your church, and
            strengthen your faith journey. Explore daily devotions, upcoming
            events, and meaningful conversations with fellow members. Let’s grow
            in faith together!
          </p>

          {/* logo */}
        </div>
        <div>
          {/*  */}
          <h4 className="text-2xl">Company</h4>
          <ul className="flex flex-col gap-3">
            <Link href={'/'} className="mt-6">Home</Link>
            <Link href={'/event'}>Events</Link>
            <Link href={'/about'}>About</Link>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl">Contact</h4>
          <p className="mt-8">contact@gmail.com</p>
        </div>
      </div>
      {/* icons */}
      <div className="w-[80%] mx-auto mt-6 flex gap-92">
        <div className="flex gap-12 pb-6">
        <IoLogoWhatsapp size={25}/>
        <FaInstagram size={25}/>
        <FaFacebook size={25}/>
        <FaYoutube size={25} />
        </div>
        <div>
            <p>Copyright &copy; 2024.All right reserved to Communion</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
