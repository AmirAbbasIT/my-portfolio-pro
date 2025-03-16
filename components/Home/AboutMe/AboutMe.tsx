import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["Nextjs/React", "TypeScript/JavaScript", "Tailwind CSS", "Chakra UI"],
    ["Node.js", "RESTful APIs", "Builder.io", "Redux"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Hello! My name is Amir, and I&apos;m a passionate{" "}
                <span className="text-AAsecondary">
                  Full Stack Software Engineer{" "}
                </span>
                with strong problem-solving skills. I hold a degree in{" "}
                <span className="text-AAsecondary">Information Technology</span>
                . I graduated and began my career as a React.js developer in
                2020, which sparked my journey in software development. Over
                time, I expanded my expertise across various technologies,
                allowing me to build scalable and efficient full-stack
                applications.
              </span>
            </div>
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Throughout my education and professional journey, from my
                self-learning beginnings to earning my degree, I have
                accumulated extensive experience across various industries. I
                began my career at{" "}
                <span className="text-AAsecondary">
                  Codility Solutions Lahore
                </span>
                , where I honed my skills in software development. I then joined{" "}
                <span className="text-AAsecondary">Tkxel</span>, one of
                Pakistan&apos;s leading IT firms, before transitioning to a role
                as a Software Engineer at{" "}
                <span className="text-AAsecondary">9t5</span>. Currently, I am
                working as an independent freelancer, collaborating with{" "}
                <span className="text-AAsecondary">EventEspresso</span>, a
                prominent Canadian company. Over the course of my career, I have
                had the privilege of working on a diverse range of projects,
                where I developed scalable solutions across multiple domains.
              </span>
            </div>

            <div className="font-Header tracking-wide text-justify ">
              <span className="text-gray-400  ">
                I&apos;m always interested to keep learning and improve my
                skills to make a positive impact in the tech world. Here are
                some of the technologies I&apos;ve been working with :{" "}
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16  justify-center lg:justify-start">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/my-pic.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
