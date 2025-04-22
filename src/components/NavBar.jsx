import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  TransitionChild,
} from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, X } from "lucide-react";

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

      {/* Hamburger icon - Mobile only */}
      <button className="md:hidden" onClick={() => setOpen(true)}>
        <Menu className="w-8 h-8 text-black dark:text-white" />
      </button>

      {/* Mobile Dialog */}
      <Dialog open={open} onClose={setOpen} className="relative z-20">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex justify-end">
          <TransitionChild
            enter="transition ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="relative w-3/4 max-w-sm h-full bg-white/50 dark:bg-[#181a1b]/50 backdrop-blur-md p-6 shadow-xl">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 hover:text-black"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-white"/>
              </button>

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
