import React from "react";

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
        <div className="flex justify-center items-center mt-4">
          <a href="#" className="text-gray-500 hover:text-white mr-4">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-white mr-4">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-white mr-4">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
        <div className="text-gray-500 text-center text-xs mt-4">
          Copyright © 2023 Build Your Dream 11 Team and Conquer the Game!
        </div>
      </footer>
  );
};

export default Footer;
