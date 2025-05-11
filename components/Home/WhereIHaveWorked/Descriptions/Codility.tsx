import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Codility() {
  const tasks = [
    {
      text: "Built analytics dashboards and store settings for a Shopify-integrated app using React and GraphQL, visualizing customer and billing data.",
      keywords: ["React", "GraphQL", "Shopify", "analytics", "dashboards"],
    },
    {
      text: "Implemented dynamic exchange rate and news modules in a finance app using React, Redux, and Firebase Cloud Messaging for real-time updates.",
      keywords: [
        "React",
        "Redux",
        "Firebase",
        "push notifications",
        "exchange rates",
        "news",
      ],
    },
    {
      text: "Developed a cross-platform hotel reservation PWA using React and Cordova, enabling real-time negotiation between users and hotel admins.",
      keywords: [
        "PWA",
        "React",
        "Cordova",
        "reservation system",
        "user roles",
        "real-time negotiation",
      ],
    },
    {
      text: "Contributed to the front-end of a multi-module ERP SaaS platform, delivering features for HR, project management, attendance, and multilingual support.",
      keywords: [
        "ERP",
        "React",
        "Node.js",
        "PostgreSQL",
        "HR",
        "project management",
        "multi-language",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-700 sm:text-lg text-sm font-Arimo tracking-wide">
            Junior Software Engineer{" "}
            <span className="text-sky-600">@ Codility Solutions</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-600">
            Sep 2020 - Aug 2021
          </span>
          <span
            className="font-mono text-xs text-sky-600 hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://codility.co/", "_blank")}
          >
            https://codility.co
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
