import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center my-10 text-gray-400 dark:text-[#aba5a5] text-sm">
        <p>© {new Date().getFullYear()} Baruch. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
