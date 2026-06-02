import TerminalSection from "./terminal/Terminal";

const AboutMe = () => {
  return (
    <>
      <div
        className="w-full min-h-screen md:w-auto flex bg-neutral items-center justify-around"
        id="about"
      >
        <div
          className="hidden lg:block"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            src="/avatar/illustration-guy-with-laptop.jpg"
            alt="avatar"
            className="w-32 md:w-48 lg:w-64 object-contain"
          />
        </div>

        <div
          className="flex justify-center items-center h-fit"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-col w-full max-w-[300px] md:max-w-[600px] px-4 md:px-0 items-center justify-center gap-10 md:gap-5">
            <div className="flex flex-col items-center justify-center md:w-fit">
              <p className="text-gray-400 dark:text-[#b2aba1] text-xs md:text-sm font-semibold">
                Get to know more
              </p>
              <p className="text-2xl md:text-3xl font-semibold relative group inline-block dark:text-white">
                About Me
                <span className="absolute left-0 -bottom-1 h-1 bg-gray-700  dark:bg-white rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
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
