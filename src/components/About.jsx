function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1
        className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight
      "
      >
        Midori is a Strategic partner for fast-growing Visuals that need to be
        on the top.
      </h1>
      <div className="flex gap-5 w-full mt-20 pt-10 border-t-[1px] border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 uppercase rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div>
      </div>
    </div>
  );
}

export default About;
