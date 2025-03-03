import Marquee from "react-fast-marquee";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import c7 from "../assets/images/c7.png";
import c8 from "../assets/images/c8.png";
import c9 from "../assets/images/c9.png";
import c10 from "../assets/images/c10.png";

export default function MarqueeSlider() {
  const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c3, c6];
  const imagesReverse = [...images].reverse();

  return (
    <div className="bg-black py-10">
      <div className="flex flex-col md:flex-row justify-between w-[90%] md:w-[75%] mx-auto items-center mb-14 text-center md:text-left">
        <h2 className="text-white text-[32px] md:text-[40px] w-full md:w-[45%] mb-4 md:mb-0">
          Trusted by 200+ companies around the world
        </h2>
        <p className="text-gray-400 text-[14px] md:text-[12px] w-full md:w-[35%]">
          Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet
          tellus purus sit odio eget. Diam morbi faucibus vitae neque id in.
          Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
        </p>
      </div>

      <Marquee speed={50} pauseOnHover={true} gradient={false} direction="left">
        {images.map((img, index) => (
          <div key={index} className="w-2/3">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full border border-white rounded-lg py-2 px-6 object-cover mb-6"
            />
          </div>
        ))}
      </Marquee>

      <Marquee
        speed={50}
        pauseOnHover={true}
        gradient={false}
        direction="right"
      >
        {imagesReverse.map((img, index) => (
          <div key={index} className="mx-2 w-2/3">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full border border-white rounded-lg py-2 px-6 object-cover"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
