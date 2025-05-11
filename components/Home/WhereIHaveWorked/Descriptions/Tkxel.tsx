import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Tkxel() {
  const tasks = [
    {
      text: "Built scalable and maintainable front-end components using React, Redux, and Styled Components to support data-heavy applications and dashboards.",
      keywords: ["React", "Redux", "Styled Components", "scalable"],
    },
    {
      text: "Integrated AI-driven insights and visualized data from multiple platforms, transforming raw input into actionable analytics.",
      keywords: [
        "AI",
        "data visualization",
        "analytics",
        "platform integration",
      ],
    },
    {
      text: "Developed survey workflows and interactive statistical dashboards, improving usability and insights delivery for small business users.",
      keywords: ["surveys", "dashboards", "statistical graphs", "usability"],
    },
    {
      text: "Collaborated in an Agile environment with design and backend teams to ensure consistency and high performance across the application.",
      keywords: ["collaboration", "Agile", "performance", "consistency"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-700 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-sky-600">@ Tkxel</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-600">
            Aug 2021 - Mar 2022
          </span>
          <span
            className="font-mono text-xs text-sky-600 hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://tkxel.com/", "_blank")}
          >
            https://tkxel.com
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
