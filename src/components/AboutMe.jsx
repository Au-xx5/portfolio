import React from "react";
import TerminalSection from "./terminal/Terminal";

const AboutMe = () => {
  return (
    <>
      <div
        className="block min-w-[300px] min-h-screen md:w-auto md:flex bg-neutral items-center justify-around pt-24 md:pt-15"
        id="about"
      >
        <div className="hidden lg:block">
          <img
            src="/avatar/illustration-guy-with-laptop.jpg"
            alt="avatar"
            className="w-48 md:h-90"
          />
        </div>

        <div className="flex justify-center items-center h-fit">
          <div className="flex flex-col min-w-[300px] md:min-w-[600px] items-center justify-center gap-10 md:gap-5">
            <div className="flex flex-col items-center justify-center md:w-fit">
              <p className="text-gray-400 text-xs md:text-sm font-semibold">
                Get to know more
              </p>
              <p className="text-2xl md:text-3xl font-semibold relative group inline-block">
                About Me
                <span className="absolute left-0 -bottom-1 h-1 bg-gray-700 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </p>
            </div>
            <TerminalSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
