import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Built and maintained a scalable web platform using React.js and Next.js App Router, integrating a visual CMS (Builder.io) to deliver a flexible and optimized content experience.",
      keywords: [
        "React.js",
        "Next.js",
        "App Router",
        "Builder.io",
        "visual CMS",
      ],
    },
    {
      text: "Developed a custom event calendar using React and integrated it with a WordPress plugin, ensuring responsive performance and seamless UX across devices.",
      keywords: ["React", "WordPress", "event calendar", "responsive UX"],
    },
    {
      text: "Led architectural decisions across the stack, implementing secure and high-performing APIs while optimizing the app for SEO and user engagement.",
      keywords: [
        "full-stack",
        "API",
        "performance",
        "security",
        "SEO",
        "architecture",
      ],
    },
    {
      text: "Collaborated closely with cross-functional teams to ensure technical quality, long-term maintainability, and adherence to project standards in a remote setup.",
      keywords: [
        "remote collaboration",
        "technical quality",
        "maintainability",
        "project standards",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-700 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Software Engineer{" "}
            {/* <span className="text-sky-600">@ Blockchain</span> */}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-600">
            Sept 2023 - Present
          </span>
          <span
            className="font-mono text-xs text-sky-600 hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            // onClick={() =>
            //   window.open("https://www.trouvetavoie.io/", "_blank")
            // }
          >
            Contact Me for More Info
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
