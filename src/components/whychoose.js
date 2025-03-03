import Img from "../assets/images/chooseImg.png";

const WhyChooseUs = () => {
  return (
    <div className="bg-black flex justify-center py-16 px-4">
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl text-white">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={Img} alt="Person with telescope" className="w-full max-w-xs md:max-w-md" />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold">Why choose us</h2>
          <p className="text-gray-400 mt-3">
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac
            libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu
            elit. Morbi aliquam porttitor mattis consequat neque, tellus
            blandit.
          </p>

          <div className="mt-6">
            <button className="border border-yellow-500 text-yellow-500 py-2 px-6 rounded-full hover:bg-yellow-500 hover:text-black transition">
              LET'S CONNECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;