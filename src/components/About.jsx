import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
const About = () => {
  return (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={"about"}>
          &nbsp;
        </span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview.</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a fourth-year IT student in Metropolia University of Applied Sciences, 
        currently learning and gaining knowledge in various programming languages and technologies. Since August 2023, 
        I have been developing my skills as junior software developer at TOYOTA GAZOO Racing World Rally Team Oy, 
        where I apply my skills to real-world projects in a dynamic environment. I am eager to continue learning and 
        leveraging my skills to create impactful solutions in the tech industry.
      </motion.p>
    </motion.section>
  );
};

export default About;
