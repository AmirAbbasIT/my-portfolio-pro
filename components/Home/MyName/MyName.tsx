import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-sky-600 font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-500 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Amir Abbas.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 5.1,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 5.1,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-7  00 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I turn ideas into reality.
      </motion.h2>

      {/* <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-sky-600">software engineer</span>, with strong problem-solving skills. I
        specialize in building great digital experiences, <br className="2xl:block hidden" />
        both in <span className="text-sky-600">front-end</span> and{" "}
        <span className="text-sky-600">back-end</span> development. I work with different technologies, including
        <span className="text-sky-600"> web3</span> and regular <br className="2xl:block hidden" /> web
        applications. I enjoy working on projects that bring new ideas and high-quality results.
      </motion.h3> */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 5.2,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 5.2,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-600 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider "
      >
        I&apos;m a{" "}
        <span className="text-sky-600">Full Stack Software Engineer</span> with
        strong <span className="text-sky-600">problem-solving skills</span>,
        specializing in creating exceptional digital experiences.
        <br className="3xl:block hidden" /> With expertise in both{" "}
        <span className="text-sky-600">front-end</span> and{" "}
        <span className="text-sky-600">back-end development</span>, I work with
        a diverse range of technologies.I I enjoy solving challenging projects
        that drive <span className="text-sky-600"> innovation</span> and deliver
        high-quality results.
        <br className="3xl:block hidden" /> My experience in{" "}
        <span className="text-sky-600">creating scalable solutions</span>
        <br className="3xl:block hidden" /> I am excited to contribute to
        dynamic projects that push the boundaries of technology.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 5.3,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 5.3,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        {/* <a
          // href={"/resume.pdf"}
          href={"#"}
          target={"_blank"}
          rel="noreferrer"
        >
          <button className="bg-white text-sky-600 border rounded px-4 sm:px-8 py-3 sm:py-4 border-sky-600">
            Check out my resume!
          </button>
        </a> */}
      </motion.div>
    </div>
  );
}
