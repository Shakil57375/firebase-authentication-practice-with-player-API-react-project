import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
      <footer className="bg-gray-800 w-full pt-4 pb-4 mt-6">
        <div className="text-white text-center text-sm mb-2">
          Build Your Dream 11 Team and Conquer the Game!
        </div>
        <nav className="flex lg:flex-row flex-col justify-center items-center">
          <a href="/" className="text-gray-500 hover:text-white px-3 py-2">
            Home
          </a>
          <a href="/players" className="text-gray-500 hover:text-white px-3 py-2">
            Players
          </a>
          <a
            href="/myTeam"
            className="text-gray-500 hover:text-white px-3 py-2"
          >
            My Team
          </a>
          <a
            href="/signUp"
            className="text-gray-500 hover:text-white px-3 py-2"
          >
            Sign Up
          </a>
          <a href="/termsAndConditions" className="text-gray-500 hover:text-white px-3 py-2">
            Terms and Conditions
          </a>
        </nav>
        <div>
          <p className="text-center font-semibold text-gray-500 hover:text-white ">Contact with me by using</p>
          <div className="flex justify-center items-center mt-4">
            <a href="https://web.facebook.com/profile.php?id=100056182026221" className=" mr-4">
            <FaFacebook className="text-gray-500 hover:text-white " />
            </a>
            <a href="https://twitter.com/ShakilHoss25740" className="mr-4">
              <FaTwitter className="text-gray-500 hover:text-white " />
            </a>
            <a href="https://www.instagram.com/shakil57375/" className="mr-4">
              <FaInstagram className="text-gray-500 hover:text-white " />
            </a>
          </div>
        </div>
        <div className="text-gray-500 text-center text-xs mt-4">
          Copyright © 2023 All rights reserved by Shakil Hossain.
        </div>
      </footer>
  );
};

export default Footer;
