import React from "react";
import html from "/skills/html.png";
import css from "/skills/css.png";
import javascript from "/skills/javascript.png";
import tailwindcss from "/skills/tailwindcss.png";
import bootstrap from "/skills/bootstrap.png";
import react from "/skills/react.png";
import nodejs from "/skills/nodejs.png";
import expressjs from "/skills/expressjs.png";

const Skills = () => {
  const skills = [
    {
      img: html,
      name: "HTML",
      desc: "The standard markup language for creating web pages",
    },
    {
      img: css,
      name: "CSS",
      desc: "Stylesheet language used for describing web page presentation",
    },
    {
      img: tailwindcss,
      name: "Tailwind CSS",
      desc: "A utility-first CSS framework for rapid UI development",
    },
    {
      img: bootstrap,
      name: "Bootstrap",
      desc: "A popular CSS framework for responsive web design",
    },
    {
      img: javascript,
      name: "JavaScript",
      desc: "The programming language of the web",
    },
    {
      img: react,
      name: "React",
      desc: "A JavaScript library for building user interfaces",
    },
    {
      img: nodejs,
      name: "Node JS",
      desc: "JavaScript runtime built on Chrome's V8 engine",
    },
    {
      img: expressjs,
      name: "Express JS",
      desc: "A web application framework for Node.js",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-6 min-h-screen pt-30" id="skills">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="text-2xl md:text-3xl font-semibold relative group inline-block mb-3">
            My Skills
            <span className="absolute left-0 -bottom-1 h-1 bg-gray-700 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h1>

          <p className="text-gray-400 text-xs md:text-sm font-semibold">
            Technologies I have mastered through experience
          </p>
        </div>

        <div
          className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 rounded-2xl bg-white/70 shadow-md border border-white/30 transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-gray-400"
            >
              {/* Skill icon */}
              <div className="mb-4 p-3 bg-white rounded-xl shadow transition-transform duration-300 hover:scale-110">
                <img
                  src={skill.img}
                  alt={`${skill.name} Icon`}
                  className="w-14 h-14"
                />
              </div>

              {/* Skill name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-gray-600">
                {skill.name}
              </h3>

              {/* Skill description */}
              <p className="text-sm text-gray-600 text-center px-2 transition-colors duration-300 hover:text-gray-800">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
