/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//           <h3 className="text-white font-bold text-[20px] text-center">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

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
        I am fourth-year IT student in Metropolia University of Applied Sciences, 
        currently learning and gaining knowledge in various programming languages and technologies. Since August 2023, 
        I have been developing my skills as junior software developer at TOYOTA GAZOO Racing World Rally Team Oy, 
        where I apply my skills to real-world projects in a dynamic environment.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </motion.section>
  );
};

export default About;
