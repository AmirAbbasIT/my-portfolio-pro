import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function NineToFive() {
  const tasks = [
    {
      text: "Developed and maintained the job seeker portal using Next.js, delivering fast and responsive user experiences for Australian users.",
      keywords: ["Next.js", "job seeker", "responsive UI", "Australian users"],
    },
    {
      text: "Implemented critical features on both the seeker and admin sides of the platform, ensuring seamless functionality across roles.",
      keywords: [
        "seeker features",
        "admin features",
        "cross-role functionality",
      ],
    },
    {
      text: "Worked with Tailwind CSS and React to build clean, modular UI components that adhered to accessibility and performance standards.",
      keywords: [
        "Tailwind CSS",
        "React",
        "UI components",
        "accessibility",
        "performance",
      ],
    },
    {
      text: "Collaborated with backend teams to integrate APIs and improve platform scalability using best practices in JavaScript and frontend architecture.",
      keywords: [
        "API integration",
        "scalability",
        "JavaScript",
        "frontend architecture",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-700 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
            <span className="text-sky-600">@ 9T5 Pty Ltd</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-600">
            Mar 2022 - Sep 2023
          </span>
          <span
            className="font-mono text-xs text-sky-600 hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://9t5.com.au/", "_blank")}
          >
            https://9t5.com.au
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-sky-600 flex-none"} />
                <span
                  className="text-gray-600 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
