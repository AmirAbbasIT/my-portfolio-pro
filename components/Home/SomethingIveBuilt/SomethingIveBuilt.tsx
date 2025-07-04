import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import FullscreenGallery from "./FullscreenGallery";

const projects = [
  {
    company: "9T5",
    imageUrl: "/projects/wia/wia1.png",
    project: "WorkinAUS",
    link: "https://workinaus.com.au/home",
    gallery: [
      "/projects/wia/wia1.png",
      "/projects/wia/wia2.png",
      "/projects/wia/wia3.png",
      "/projects/wia/wia4.png",
      "/projects/wia/wia5.png",
      "/projects/wia/wia6.png",
    ],
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Redux (easy-peasy)",
      "JavaScript",
    ],
    description: `<p className="text-gray-800 md:text-gray-800 text-left md:text-left">
    At <span className="text-sky-600">workinAUS</span>, I worked
    as a front-end developer focused on building and refining the
    user interfaces for both the job seeker and employer portals. I
    led the development of the seeker-side platform using 
    <span className="text-sky-600">Next.js</span> with the Page
    Router, and contributed to the employer-side front-end built with 
    <span className="text-sky-600">React.js</span>. The
    platform enabled Australian users to search and apply for
    jobs, featuring employer-specific job listings, a teleprompter tool for video intros, and an
    intuitive job search experience—built with scalability,
    performance, SEO, and user-friendliness in mind.
  </p>`,
  },
  {
    company: "Codility Solutions",
    imageUrl: "/projects/erp.png",
    project: "ERP Pack",
    link: "https://codility.co/",
    gallery: [
      "/projects/erp/erp1.png",
      "/projects/erp/erp2.png",
      "/projects/erp/erp3.png",
      "/projects/erp/erp4.png",
      "/projects/erp/erp5.png",
      "/projects/erp/erp6.png",
      "/projects/erp/erp7.png",
      "/projects/erp/erp8.png",
      "/projects/erp/erp9.png",
      "/projects/erp/erp10.png",
      "/projects/erp/erp12.png",
    ],
    skills: ["React", "Redux", "TypeScript", "API Integration"],
    description: `<p className="text-gray-800 md:text-gray-4800 text-left">
                  I contributed to the development of a complete, modular 
                  <span className="text-sky-600">ERP Pack</span> solution
                  tailored for business operations. The platform included robust
                  modules such as 
                  <span className="text-sky-600">Attendance</span>, 
                  <span className="text-sky-600">Leaves</span>, 
                  <span className="text-sky-600">Employee Management</span>, 
                  <span className="text-sky-600">Accounting</span>, 
                  <span className="text-sky-600">Payroll</span>, and more. I was
                  responsible for building scalable UI components, managing API
                  integrations, and ensuring smooth functionality across
                  features like 
                  <span className="text-sky-600">multi-language</span> and 
                  <span className="text-sky-600">time zone</span> support.
                </p>`,
  },
  {
    company: "Codility Solutions",
    imageUrl: "/projects/pwa/pwa1.png",
    project: "Hotel Management PWA App",
    // link: "https://codility.co/",
    gallery: [
      "/projects/pwa/pwa1.png",
      "/projects/pwa/pwa2.png",
      "/projects/pwa/pwa3.png",
      "/projects/pwa/pwa4.png",
      "/projects/pwa/pwa5.png",
      "/projects/pwa/pwa6.png",
      "/projects/pwa/pwa7.png",
      "/projects/pwa/pwa8.png",
      "/projects/pwa/pwa9.png",
      "/projects/pwa/pwa10.png",
    ],
    skills: [
      "React",
      "Cordova",
      "HTML",
      "CSS",
      "Bootstrap",
      "API Integration",
      "Redux",
    ],
    description: `<p className="text-gray-800 md:text-gray-4800 text-left">
  I contributed to the development of the <span className="text-sky-600">Hotel Management PWA App</span>, 
  a cross-platform solution that allows users to effortlessly book hotels and negotiate services. Developed for <span className="text-sky-600">Android</span>, 
  <span className="text-sky-600">iOS</span>, and <span className="text-sky-600">Web</span>, the app features two main modules:
  <ul className="list-disc pl-5">
    <li><span className="text-sky-600">Users</span>: Post reservation requests and negotiate with hotels.</li>
    <li><span className="text-sky-600">Clients (Hotels)</span>: Respond to user posts and secure bookings.</li>
  </ul>
  I worked on the front-end using <span className="text-sky-600">React.js</span> and <span className="text-sky-600">Cordova</span>, 
  ensuring smooth performance across platforms, and implemented <span className="text-sky-600">Redux</span> for state management and API integrations.
</p>`,
  },
];
export default function SomethingIveBuilt() {
  const router = useRouter();

  const [gallery, setGallery] = useState<string[] | null>(null);
  const openFullscreen = (gallery: string[]) => {
    setGallery(gallery);
  };

  const closeFullscreen = () => {
    setGallery(null);
  };

  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-white w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
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
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up">
            <div className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
              {/* Left image */}
              <div
                className="hidden bg-white z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
              >
                <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <div
                      className="absolute w-full h-full rounded bg-white 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                    ></div>
                  </a>
                  <Img
                    src={project.imageUrl}
                    alt={"Project Screen shot"}
                    className={`w-full rounded h-full `}
                  />
                </div>
              </div>

              {/* right Content */}
              <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
                <div
                  className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
                >
                  <div className="flex flex-col space-y-1  z-10">
                    <span className="text-sky-600 text-base">
                      {project.company}
                    </span>
                    <a
                      href="https://workinaus.com.au/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className=" md:text-gray-700 text-sky-600 font-bold text-xl hover:cursor-pointer">
                        {project.project}
                      </span>
                    </a>
                  </div>
                  <div
                    className="w-full md:bg-gray-200 rounded-md py-6 md:p-6 z-10"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></div>
                  <ul className="flex flex-wrap w-full text-gray-600 md:text-gray-600 text-sm font-Text2 md:justify-start">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="pr-4 z-10">
                        {skill}
                      </span>
                    ))}
                  </ul>
                  {project.link && (
                    <div className="z-10 flex fle-row space-x-5 ">
                      <a href={project.link} target={"_blank"} rel="noreferrer">
                        <ExternalLink url={""} router={router} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Thumbnails Grid */}
            <div className="flex flex-col items-center mt-2 mx-16">
              <span className=" md:text-gray-700 text-sky-600 font-bold text-xl hover:cursor-pointer">
                Project Gallery
              </span>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, index) => {
                  const image = project.gallery[index % project.gallery.length];
                  return (
                    <div
                      key={index}
                      className="relative flex justify-center cursor-pointer"
                      onClick={() => openFullscreen(project.gallery)}
                    >
                      {/* Image with Overlay */}
                      <Img
                        src={image}
                        alt={`Project Screenshot ${index + 1}`}
                        className="w-48 h-32 rounded-lg object-cover transition-opacity duration-300 ease-in-out"
                      />

                      {/* Faded overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
                        <span className="text-white text-lg font-semibold">
                          Click to View Gallery
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        {gallery && (
          <FullscreenGallery
            gallery={gallery}
            currentImageIndex={0}
            onClose={closeFullscreen}
          />
        )}
      </div>
    </div>
  );
}
