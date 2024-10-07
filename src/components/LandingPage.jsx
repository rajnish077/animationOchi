import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed=".3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <>
              <div key={index} className="masker">
                <div className="w-fit flex">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-[1vw] w-[8vw] h-[5vw] relative top-[1vw] rounded-md bg-red-500"
                    ></motion.div>
                  )}
                  <h1
                    className="
                  uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders Grotesk'] font-semibold "
                  >
                    {item}
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div
        className="border-t-[1px]  bg-zinc-900 border-zinc-800 mt-20
      flex justify-between items-center py-5 px-20"
      >
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm uppercase">
            start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
