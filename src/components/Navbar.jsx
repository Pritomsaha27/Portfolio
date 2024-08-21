import React from "react";
import { FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" flex items-center  md:justify-end justify-center py-6">
      <div
        className="m-8 flex items-center justify-center gap-4 text-4xl
         "
      >
        <a href="https://github.com/Pritomsaha27" target="blank"> <FaGithub /></a>
       <a href="https://wa.me/6294949768" target="blank"> <FaWhatsapp /></a> 
       <a href="https://www.linkedin.com/in/pritom-saha-0bb0a6324" target="blank"><FaLinkedin /></a> 
      </div>
    </nav>
  );
};

export default Navbar;
