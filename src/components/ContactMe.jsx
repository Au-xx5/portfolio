import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <>
      <div className="pt-24 md:pt-32 px-8 min-h-screen" id="contact">
        <div className="max-w-4xl mx-auto text-white text-center lg:text-left">
          <h2
            className="text-black dark:text-white text-2xl md:text-3xl font-bold relative group inline-block"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Get in Touch
            <span className="absolute left-0 -bottom-1 h-1 bg-gray-600 dark:bg-white rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h2>
          <p
            className="mt-2 text-gray-400 dark:text-[#b2aba1] text-sm md:text-[1rem]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Feel free to reach out for collaborations, project inquiries, or
            just to say hello. I'm always excited to connect and explore new
            opportunities!
          </p>

          <div
            className="flex items-center justify-center lg:justify-start gap-4 mt-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {[
              { Icon: FaGithub, link: "https://github.com/poloexe" },
              {
                Icon: FaLinkedinIn,
                link: "https://linkedin.com/in/poloexe",
              },
              { Icon: FaInstagram, link: "https://instagram.com/rtro.polo" },
              { Icon: FaXTwitter, link: "https://twitter.com/capalot_tecs" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black dark:border-gray-200 text-black dark:text-gray-200 rounded-md active:bg-black active:text-white lg:hover:bg-[#232425] lg:hover:text-white lg:hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {[
              {
                icon: <FaInstagram size={24} />,
                label: "instagram.com/rtro.polo",
              },
              {
                icon: <FaEnvelope size={24} />,
                label: "baruchefiok@gmail.com",
              },
            ].map(({ icon, label }, i) => (
              <div key={i} className="relative w-full h-40">
                {/* back layer */}
                <div className="absolute top-3 left-3 w-full h-full bg-gray-400 dark:bg-[#4c4d4f] rounded-2xl"></div>
                {/* front layer */}
                <div className="relative w-full h-full bg-gray-300 dark:bg-[#232425] rounded-2xl p-6 flex items-center gap-4">
                  <div className="text-black dark:text-white">{icon}</div>
                  <span className="text-black  dark:text-white text-xs lg:text-md ">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
