import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 flex h-20 items-center justify-between px-6 md:px-20 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/5 dark:backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <p className="text-xl text-black dark:text-white logo">Baruch</p>

      {/* Hamburger icon - Mobile only */}
      <button className="md:hidden" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-black dark:text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          />
        </svg>
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 text-lg font-medium text-black">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-gray-600 dark:hover:text-[#b2aba1] dark:text-white transition hover:scale-105"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Dialog */}
      <Dialog open={open} onClose={setOpen} className="relative z-20">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex items-start justify-center p-4">
          <TransitionChild
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-[-20px] scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-[-20px] scale-95"
          >
            <DialogPanel className="relative w-full max-w-sm rounded-lg bg-white dark:bg-[#181a1b] p-6 pt-10 shadow-xl">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <XMarkIcon className="w-6 h-6 dark:text-white" />
              </button>

              {/* Title */}
              <DialogTitle className="text-center text-2xl font-bold text-black dark:text-white logo">
                Baruch
              </DialogTitle>

              {/* Nav Links */}
              <nav className="mt-6 flex flex-col items-center gap-4 text-lg text-black">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="w-full text-center dark:text-gray-200 dark:hover:text-gray-400 px-4 py-2 rounded-md transition active:bg-gray-100 dark:active:bg-[#232425] active:scale-95"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </div>
  );
};

export default NavBar;
