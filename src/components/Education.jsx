/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { education } from "../constants";

const ProjectCard = ({ index, degree, date, location, school }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {" "}
      <div className="mx-auto flex flex-col w-full items-center justify-center p-5 rounded-2xl">
        <div className=" bg-tertiary relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#CB9DF0_20deg,transparent_120deg)]"></div>
          <div className="relative z-20 flex flex-col w-full rounded-[0.60rem] bg-slate-900 px-4 py-7">
            <h3 className="text-white font-bold text-[24px]">{degree}</h3>
            <p className="text-[14px]">{school}</p>
            <p className="text-[14px]">{location}</p>
            <p className="mt-2 text-secondary text-[14px]">{date}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={"works"}>
        &nbsp;
      </span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where have I studied</p>
        <p className={styles.sectionHeadText}>Educational Background.</p>
      </motion.div>

      <div className="mt-10 grid sm:grid-cols-2 gap-7">
        {education.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
