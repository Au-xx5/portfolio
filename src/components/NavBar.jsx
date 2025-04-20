import React, { useState, useEffect } from "react";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Check scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this value to where you want the effect to trigger
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between md:px-20 h-20 z-10 sticky top-0 transition-all duration-300 shadow-lg 
      ${
        scrolled
          ? "bg-transparent backdrop-blur-md"
          : "bg-transparent backdrop-blur-md"
      }
      `}
    >
      <p className="logo text-black mx-10 md:0">Baruch</p>

      <span className="md:hidden mx-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
          onClick={() => {
            setOpen(true);
          }}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className=" pointer-events-auto relative w-[15rem] max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-bold text-gray-900 ">
                      <XMarkIcon
                        aria-hidden="true"
                        className="size-6"
                        onClick={() => setOpen(false)}
                      />
                    </DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <nav className="flex flex-col gap-6 text-lg font-medium">
                      <a href="#about" className="text-black">
                        About
                      </a>

                      <a href="#skills" className="text-black">
                        Skills
                      </a>

                      <a href="#projects" className="text-black">
                        Projects
                      </a>

                      <a href="#contact" className="text-black">
                        Contact Me
                      </a>
                    </nav>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      <nav className="hidden md:flex gap-6 text-lg font-medium">
        <a
          href="#about"
          className="text-black hover:text-gray-600 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(128,128,128,0.8)]"
        >
          About
        </a>

        <a
          href="#skills"
          className="text-black hover:text-gray-600 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(128,128,128,0.8)]"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="text-black hover:text-gray-600 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(128,128,128,0.8)]"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="text-black hover:text-gray-600 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(128,128,128,0.8)]"
        >
          Contact Me
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
