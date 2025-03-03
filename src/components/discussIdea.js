const DiscussIdea = () => {

  return (
    <div className="bg-black py-10">
      <div className="bg-[#FFB219] w-11/12 mx-auto  text-center p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black">
          Let’s discuss the idea
        </h2>

        <p className="text-gray-600 mt-2">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta <br/>porta
          feugiat scelerisque in elit.
        </p>

        <div className="mt-6 flex justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 w-64 rounded-full border border-gray-400 focus:outline-none"
          />
          <button className="bg-black text-white font-semibold py-2 px-6 rounded-full">
            SEND
          </button>
        </div>

      </div>
        <div className="mt-6 flex justify-end w-11/12 mx-auto">
          <button className="border border-[#FFA800] text-[#FFA800] py-2 px-5 rounded-full hover:bg-black hover:text-white transition">
            GO TO TOP
          </button>
        </div>
    </div>
  );
};

export default DiscussIdea;
