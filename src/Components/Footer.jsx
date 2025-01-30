import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-500 text-white text-center p-5 w-full">
      <p>&copy; {currentYear} Ashish Adhikari. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
