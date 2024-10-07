function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-800 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#243d3a]">
          <img
            className="w-30 h-30"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Clutch"
          />
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2024
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#243d3a]">
          <img
            className="w-30 h-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Logo"
          />
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
