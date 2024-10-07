import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-100 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[20vw] leading-none font-['Founders Grotesk'] pt-5 mb-[5vw] uppercase font-semibold pr-10"
        >
          We Are midori
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[20vw] leading-none font-['Founders Grotesk'] pt-5 mb-[5vw] uppercase font-semibold pr-10"
        >
          We Are midori
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
