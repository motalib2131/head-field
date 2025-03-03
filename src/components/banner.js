const Banner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-black py-6">
        <div className="absolute bottom-[100px] left-0 w-40 h-40 md:w-52 md:h-52 bg-[#EF9364] blur-[80px] md:blur-[100px] opacity-60"></div>
        <div className="absolute top-0 right-0 w-40 h-40 md:w-52 md:h-52 bg-purple-500 blur-[80px] md:blur-[100px] opacity-40"></div>
      </div>

      <div className="relative text-white text-center md:text-left max-w-lg px-6">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          Attract{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            New
          </span>{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-teal-400 text-transparent bg-clip-text">
            Leads
          </span>
          <br />
          like never before
        </h1>

        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros.
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 w-full">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 w-full md:w-64 rounded-full border border-gray-500 bg-black text-white focus:ring-1 focus:ring-orange-500"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full w-full md:w-auto">
            ATTRACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
