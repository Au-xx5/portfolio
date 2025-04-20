import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="hidden lg:fixed top-1/2 left-4 lg:flex flex-col gap-4 z-50 px-5">
      <a
        href="https://github.com/poloexe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin text-3xl text-black ">
          <BsGithub className="transition-transform duration-300 hover:scale-120" />
        </i>
      </a>
      <a
        href="https://linkedin.com/in/poloexe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin text-3xl text-black ">
          <FaLinkedin className="transition-transform duration-300 hover:scale-120" />
        </i>
      </a>
      <a
        href="https://instagram.com/rtro.polo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram text-3xl text-black ">
          <FaInstagram className="transition-transform duration-300 hover:scale-120" />
        </i>
      </a>
      <a
        href="https://twitter.com/capalot_tecs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter text-3xl text-black">
          <FaSquareXTwitter className="transition-transform duration-300 hover:scale-120" />
        </i>
      </a>
    </div>
  );
}
