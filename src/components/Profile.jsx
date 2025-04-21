import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen dark:text-white">
        <div className="w-3xl flex flex-col items-center h-full gap-15 py-20">
          <div className="flex flex-col items-center justify-center gap-3">
            <p
              className="text-xl md:text-3xl"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Hi, I'm
            </p>
            <p
              className="text-3xl md:text-6xl font-semibold"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Baruch Isemin
            </p>
            <p
              className="hero-text text-center text-gray-500 dark:text-[#b2aba1] md:text-3xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              FullStack Developer
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2500">
            <a
              href="/resume/baruch-resume.pdf"
              download="Baruch_Resume"
              className="inline-block text-black dark:text-gray-200 border-2 rounded-3xl p-3 active:bg-black active:text-white dark:active:bg-[#232425] active:scale-110 active:skew-x-3 lg:hover:text-white lg:hover:bg-black dark:lg:hover:bg-[#232425] transition-all duration-500 ease-in-out lg:hover:scale-110  lg:hover:skew-x-3 animate-wiggle"
            >
              Download Resume →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
