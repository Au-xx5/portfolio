import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center text-gray-400 dark:text-[#aba5a5] text-sm py-10">
        <p>© {new Date().getFullYear()} AJ. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
