import React from "react";
import Logo from "./Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
function Footer() {
  return (
    <footer className="bg-section">
      <div className="container mx-auto grid py-10 px-10 gap-x-20 gap-y-16 sm:grid-cols-2 ">
      
        <div className="flex flex-col  order-1 sm:order-2">
            <p className="font-bold uppercase">Company</p>
          <ul className=" mt-4 flex flex-col lg:flex  gap-2 text-heading text-md font-medium ">
            <li className="cursor-pointer text-primary">
              <a href="#how-it-works">How it Works</a>{" "}
            </li>
            <li className="cursor-pointer hover:text-primary-hover transition duration-500">
              <a href="#meals">Meals</a>
            </li>
            <li className="cursor-pointer hover:text-primary-hover transition duration-500">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="cursor-pointer hover:text-primary-hover transition duration-500">
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>


        <div className="flex flex-col gap-8 order-2 sm:order-1">
          <Logo />
          <div className="flex gap-4">
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <XIcon />
            </a>
          </div>
          <p>Copyright &copy; by Carlos Aguilar. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
