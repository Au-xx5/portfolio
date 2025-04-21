import React from "react";
import xclone from "/projectImg/xclone.png";
import taskmanager from "/projectImg/taskmanager.png";
import weatherapp from "/projectImg/weatherapp.png";
import memorycard from "/projectImg/memorycard.png";
import { BsGithub } from "react-icons/bs";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Projects = () => {
  const projects = [
    {
      img: taskmanager,
      name: "Task Manager",
      stack: ["Bootstrap", "React Js", "Express Js", "Mongo Db"],
      github: "https://github.com/poloexe/Task-Manager",
      live: "https://task-manager-vert-theta.vercel.app",
    },
    {
      img: xclone,
      name: "X Clone",
      stack: ["Tailwind css", "Daisy UI", "React Js", "Express Js", "Mongo Db"],
      github: "https://github.com/poloexe/x-clone",
      live: "https://x-clone-h3o7.onrender.com",
    },

    {
      img: weatherapp,
      name: "Weather App",
      stack: ["Bootstrap", "React Js"],
      github: "https://github.com/poloexe/weather-app",
      live: "https://weather-app-theta-one-58.vercel.app",
    },
    {
      img: memorycard,
      name: "Memory Card",
      stack: ["Bootstrap", "React Js"],
      github: "https://github.com/poloexe/memory-card",
      live: "https://memory-card-coral-seven.vercel.app",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-6 min-h-screen pt-30" id="projects">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p className="text-gray-400 text-xs md:text-sm font-semibold">
            Browse my recent
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold relative group inline-block mb-3">
            Projects
            <span className="absolute left-0 -bottom-1 h-1 bg-gray-700 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h1>
        </div>

        <div
          className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-5 bg-white/70 shadow-md rounded-2xl gap-5"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={project.img}
                  alt={`${project.name} Icon`}
                  className="w-40 h-30 rounded-3xl transition-transform duration-300 hover:scale-125"
                />
              </div>

              <h3 className="text-black text-xl font-semibold hover:text-gray-500">
                {project.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[11px] text-gray-800 bg-gray-200 px-2 py-1 rounded-full border border-gray-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-xs md:text-md text-center flex items-center justify-center gap-1 text-gray-800 border-2 rounded-3xl py-1 px-3 active:bg-black active:text-white active:scale-110 lg:hover:text-white lg:hover:bg-black lg:hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  <BsGithub /> Github
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-black text-xs md:text-md text-center flex items-center justify-center gap-1 border-2 rounded-3xl py-1 px-3 active:bg-black active:text-white active:scale-110 lg:hover:text-white lg:hover:bg-black lg:hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  <LuSquareArrowOutUpRight />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
