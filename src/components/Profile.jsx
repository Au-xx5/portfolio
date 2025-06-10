const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-79.6px)] dark:text-white">
        <div className="text-center px-4">
          <h1
            className="text-3xl md:text-6xl font-semibold mb-6"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Hi, I'm Baruch
          </h1>
          <p
            className="hero-text text-center text-gray-500 dark:text-[#b2aba1] md:text-md font-semibold mb-8 max-w-lg"
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
            className="flex justify-center gap-4"
          >
            <a
              href="#projects"
              download="Baruch_Resume"
              className="text-sm lg:text-lg inline-block text-black dark:text-gray-200 border-2 rounded-md p-3 active:bg-black active:text-white dark:active:bg-[#232425] active:scale-110 active:skew-x-3 lg:hover:text-white lg:hover:bg-black dark:lg:hover:bg-[#232425] transition-all duration-500 ease-in-out lg:hover:scale-110  lg:hover:skew-x-3"
            >
              View Projects 💻
            </a>
            <a
              href="#contact"
              download="Baruch_Resume"
              className="text-sm lg:text-lg inline-block text-white bg-black dark:text-gray-200 border-2 border-black rounded-md p-3 active:bg-black active:text-white dark:active:bg-[#232425] active:scale-110 active:skew-x-3 lg:hover:text-white lg:hover:bg-black dark:lg:hover:bg-[#232425] transition-all duration-500 ease-in-out lg:hover:scale-110  lg:hover:skew-x-3 animate-wiggle"
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
