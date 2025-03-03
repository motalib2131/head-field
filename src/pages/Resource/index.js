import React from "react";
import AboutBanner from "../../components/aboutBanner";
import TextSection from "../../components/textSection";
import OtherService from "../../components/otherService";
import img1 from "../../assets/images/f6.png";
import img2 from "../../assets/images/f5.png";
import img3 from "../../assets/images/f4.png";
import brandImg from "../../assets/images/brandImg.png"

const services = [
    {
      title: "Mobile App",
      content:
        "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
        img: img1
    },
    {
      title: "SEO",
      content:
        "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
        img: img2
  
    },
    {
      title: "User testing",
      content: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
      img: img3
    }
  ]
  const services1 = [
    {
      title: "Creative landing page",
      content:
        "Read More",
        img: brandImg
    },
    {
      title: "Creative landing page",
      content:
        "Read More",
        img: brandImg
  
    },
    {
      title: "Creative landing page",
      content: "Read More",
      img: brandImg
    }
  ]
const Resource = () => {
  const bannerDetails = {
    title: "Find your niche",
    subtitle: "Branding",
    description:
      "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros",
    buttonText: " BUILD MY BRAND",
  };
  const textDetails = {
    title: "Process",
    description:
      "Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.",
  };
  return (
    <>
      <AboutBanner
        title={bannerDetails.title}
        subtitle={bannerDetails.subtitle}
        description={bannerDetails.description}
        buttonText={bannerDetails.buttonText}
      />
      <div className="bg-[#0F0F0F] py-8">
        <div className="w-[83%] mx-auto">
          <TextSection
            title={textDetails.title}
            description={textDetails.description}
          />
        </div>
      </div>
      <OtherService services={services} title="Other Services"/>
      <OtherService services={services1} title="Branding Works"/>
    </>
  );
};

export default Resource;
