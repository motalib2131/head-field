import React from "react";
import AboutBanner from "../../components/aboutBanner";
import AboutTestimonial from "../../components/aboutTestimonial";

const About = () => {
  const bannerDetails = {
    title: "Shadient.co",
    subtitle: "About us",
    description:
      "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum.",
    buttonText: "Contact",
  };

  return (
    <>
      <AboutBanner
        title={bannerDetails.title}
        subtitle={bannerDetails.subtitle}
        description={bannerDetails.description}
        buttonText={bannerDetails.buttonText}
      />
      <AboutTestimonial />
    </>
  );
};

export default About;
