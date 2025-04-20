import { BiArrowToTop } from "react-icons/bi";

export default function BackToTop() {
  return (
    <>
      <div className="fixed flex justify-center items-center bottom-8 right-8 z-50 w-12 h-12">
        <a
          href="#"
          className="w-full h-full rounded-full bg-white/80 shadow-lg hover:bg-gray-500 hover:text-white transition-all duration-300 flex justify-center items-center"
        >
          <BiArrowToTop size="24" />
        </a>
      </div>
    </>
  );
}
