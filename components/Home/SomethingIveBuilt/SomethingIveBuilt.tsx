import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-white w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-sky-600"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-sky-600 font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-700 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project  1 WorkinAUS */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-white z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://workinaus.com.au/home"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-white 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/projects/waus.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-sky-600 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-white opacity-80 z-10"></div>
                <Img
                  src={"/projects/waus.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-sky-600 text-base">9T5</span>
                <a
                  href="https://workinaus.com.au/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-700 text-sky-600 font-bold text-xl hover:cursor-pointer">
                    WorkinAUS
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-gray-200 rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-800 md:text-gray-800 text-left md:text-left">
                  At <span className="text-sky-600">workinAUS</span>, I worked
                  as a full-stack developer responsible for building and
                  maintaining both the job seeker and employer portals. I
                  developed the entire seeker-side platform using{" "}
                  <span className="text-sky-600">Next.js</span> with the Page
                  Router, and contributed key features to the employer-side
                  built with <span className="text-sky-600">React.js</span>. The
                  platform enabled Australian users to search and apply for
                  jobs, while also offering features like employer-specific job
                  listings, a teleprompter tool for video intros, and an
                  intuitive job search experience—built with scalability,
                  performance, SEO, and user-friendliness in mind.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-600 md:text-gray-600 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Redux (easy-peasy)</span>
                <span className="pr-4 z-10">JavaScript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a
                  href="https://workinaus.com.au/home"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - ERP pack */}

        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-white z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-sky-600 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a href="https://codility.co/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-white 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/projects/erp.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-sky-600 opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-white opacity-80 z-10"></div>
                <Img
                  src={"/projects/erp.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-sky-600 text-base">
                  Codility Solutions
                </span>
                <a
                  href="https://codility.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-700 text-sky-600 font-bold text-xl hover:cursor-pointer">
                    ERP Pack
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-gray-200 rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-800 md:text-gray-4800 text-left">
                  I contributed to the development of a complete, modular{" "}
                  <span className="text-sky-600">ERP Pack</span> solution
                  tailored for business operations. The platform included robust
                  modules such as{" "}
                  <span className="text-sky-600">Attendance</span>,{" "}
                  <span className="text-sky-600">Leaves</span>,{" "}
                  <span className="text-sky-600">Employee Management</span>,{" "}
                  <span className="text-sky-600">Accounting</span>,{" "}
                  <span className="text-sky-600">Payroll</span>, and more. I was
                  responsible for building scalable UI components, managing API
                  integrations, and ensuring smooth functionality across
                  features like{" "}
                  <span className="text-sky-600">multi-language</span> and{" "}
                  <span className="text-sky-600">time zone</span> support.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-600 md:text-gray-600
  text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Redux</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">API Integration</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  <GithubIcon link="https://github.com/hktitof/Ypredict" />
                  <a
                    href="https://codility.co/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
