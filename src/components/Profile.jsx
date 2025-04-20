import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="w-3xl flex flex-col items-center h-full gap-15 py-20">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-xl md:text-3xl">Hi, I'm</p>
            <p className="text-3xl md:text-6xl font-semibold">Baruch Isemin</p>
            <p className="hero-text text-center text-gray-500 md:text-3xl font-semibold">
              FullStack Developer
            </p>
          </div>

          <div>
            <button className="btn text-black border-2 rounded-3xl p-3 hover:text-white hover:bg-black transition-all duration-500 ease-in-out hover:scale-110  hover:skew-x-3 animate-wiggle">
              <a href="/resume/baruch-resume.pdf" download="Baruch_Resume">
                Download Resume →
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
