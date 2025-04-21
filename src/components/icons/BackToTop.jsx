import { BiArrowToTop } from "react-icons/bi";

export default function BackToTop() {
  return (
    <>
      <div className="fixed flex justify-center items-center bottom-8 right-8 z-50 w-12 h-12">
        <a
          href="#"
          className="w-full h-full rounded-full dark:text-white bg-white/80 dark:bg-[#181a1b] shadow-lg active:bg-gray-100 dark:active:bg-[#232425] active:scale-95 lg:hover:bg-gray-500 lg:hover:text-white dark:lg:hover:bg-[#232425] transition-all duration-300 flex justify-center items-center"
        >
          <BiArrowToTop size="24" />
        </a>
      </div>
    </>
  );
}
