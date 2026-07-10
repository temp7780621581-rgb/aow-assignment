"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const leftCardVariants = {
  hidden: { opacity: 0, x: -70, rotate: -18, scale: 0.96 },
  visible: (rotation: number) => ({
    opacity: 1,
    x: 0,
    rotate: rotation,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  }),
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 70, rotate: 12, scale: 0.96 },
  visible: (rotation: number) => ({
    opacity: 1,
    x: 0,
    rotate: rotation,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  }),
};

export default function AuthenticateSkillsSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          {/* Left side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            <motion.div
              className="absolute top-0 left-0 w-[80%] h-[80%] transform -rotate-12 hover:-rotate-6 transition-transform duration-300 z-10"
              variants={leftCardVariants}
              custom={-12}
              whileInView={{ y: [0, -12, 0] }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                y: {
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/images/homepage/skills_1.png"
                alt="Professional working at night"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-[10%] w-[80%] h-[80%] transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              variants={leftCardVariants}
              custom={-6}
              whileInView={{ y: [0, 10, 0] }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                y: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              <Image
                src="/images/homepage/skills_2.png"
                alt="Professional in tech environment"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* Center content */}
          <motion.div
            className="w-full md:w-1/3 text-center my-8 md:my-0 z-20"
            variants={fadeUpVariants}
          >
            <motion.h2 className="text-3xl font-bold text-[#00418d] mb-4" variants={fadeUpVariants}>
              Authenticate Skills,
              <br />
              Simplify Hiring
            </motion.h2>
            <motion.p className="text-gray-700" variants={fadeUpVariants}>
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </motion.p>
          </motion.div>

          {/* Right side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            <motion.div
              className="absolute top-0 right-0 w-[80%] h-[80%] transform rotate-9 hover:rotate-6 transition-transform duration-300 z-10"
              variants={rightCardVariants}
              custom={9}
              whileInView={{ y: [0, -10, 0] }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                y: {
                  duration: 7.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              <Image
                src="/images/homepage/skills_3.png"
                alt="Professional at workstation"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-[10%] w-[80%] h-[80%] transform rotate-6 hover:rotate-0 transition-transform duration-300"
              variants={rightCardVariants}
              custom={6}
              whileInView={{ y: [0, 12, 0] }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                y: {
                  duration: 8.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/images/homepage/skills_4.png"
                alt="Business professional looking at digital interface"
                width={350}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
