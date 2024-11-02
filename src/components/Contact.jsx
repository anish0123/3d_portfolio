import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: [value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2rpxazx",
        "template_vqmh58n",
        {
          from_name: form.name,
          to_name: "Anish",
          from_email: form.email,
          to_email: "anishmhn@hotmail.com",
          message: form.message,
        },
        "yVwLfMusqCb7ZaZck"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for contacting. I will get back to you as soon as possible"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("error: ", error);
          alert("Something went wrong. Please try again");
        }
      );
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={"contact"}>
        &nbsp;
      </span>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 rounded-2xl p-8"
        >
          <p className={`${styles.heroSubText}`}>Get in touch</p>
          <h3 className={styles.heroHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
