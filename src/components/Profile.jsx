const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 md:px-10 lg:px-12 w-full dark:text-white">
        <div className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Hi, I'm AJ
          </h1>
          <p
            className="hero-text text-center text-gray-500 dark:text-[#b2aba1] text-sm md:text-base lg:text-lg font-semibold mb-8 w-full max-w-lg md:max-w-2xl lg:max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Passionate FullStack Developer crafting secure, scalable solutions
            and seamless digital experiences with modern web technologies. I
            love turning ideas into reality through clean code and a focus on
            user experience.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-duration="2500"
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
          >
            <a
              href="#projects"
              
              className="w-full sm:w-auto text-center text-sm lg:text-lg inline-block text-black dark:text-gray-200 border-2 dark:border-[#b2aba1] rounded-md p-3 active:bg-black active:text-white dark:active:bg-[#232425] active:scale-110 active:skew-x-3 transition-all duration-500 ease-in-out lg:hover:scale-110 lg:hover:skew-x-3"
            >
              View Projects 💻
            </a>
            <a
              href="#contact"
              // download="Baruch_Resume"
              className="w-full sm:w-auto text-center text-sm lg:text-lg inline-block text-white bg-black dark:text-gray-200 border-2 border-black rounded-md p-3 active:bg-black active:text-white dark:active:bg-[#232425] active:scale-110 active:skew-x-3 transition-all duration-500 ease-in-out lg:hover:scale-110  lg:hover:skew-x-3 animate-wiggle"
            >
              Contact Me ☎️
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
