import React from "react";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-white py-10 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold">SERENA</h2>
          <p>Your trusted fashion companion</p>
        </div>

        {/* Center Section (Navigation) */}
        <div>
          <h2 className="text-lg font-bold">NAVIGATION</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Section (Categories) */}
        <div>
          <h2 className="text-lg font-bold">CATEGORIES</h2>
          <ul className="space-y-2">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="border-t mt-8 pt-6 text-center flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          <Facebook className="hover:text-blue-600 cursor-pointer" />
          <Instagram className="hover:text-pink-600 cursor-pointer" />
          <Twitter className="hover:text-blue-400 cursor-pointer" />
          <Email className="hover:text-gray-500 cursor-pointer" />
        </div>
        <p className="text-sm">All Rights Reserved By @Cosmic Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
