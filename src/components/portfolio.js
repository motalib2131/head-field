import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const projects = [
    { category: "WEBSITE", title: "Creative landing page" },
    { category: "DIGITAL MARKETING", title: "Why We Collect User’s Data" },
    { category: "BRANDING", title: "Creative Branding" },
    { category: "USER TESTING", title: "Creative landing page" },
    { category: "DEVELOPMENT", title: "Automation. Advanced Level" },
    { category: "SEO", title: "How We Optimized Our SEO" },
  ];

  return (
    <div className="bg-black text-white w-11/12 mx-auto py-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="col-span-1 md:col-span-1 flex flex-col"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold">Some pieces of our work</h2>
          <p className="mt-4 text-gray-400">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit.
          </p>
          <button className="mt-4 py-2 border border-yellow-500 text-yellow-500 rounded-2xl w-1/3 text-sm hover:bg-yellow-500 hover:text-black transition">
            SHOW MORE
          </button>
        </div>

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border border-gray-700 p-4 rounded-lg h-auto ${
                [
                  "DIGITAL MARKETING",
                  "SEO",
                  "BRANDING",
                  "DEVELOPMENT",
                ].includes(project.category)
                  ? "max-h-40"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100} 
            >
              {project.category !== "DIGITAL MARKETING" &&
                project.category !== "BRANDING" &&
                project.category !== "DEVELOPMENT" &&
                project.category !== "SEO" && (
                  <div
                    className="bg-purple-500 h-24 rounded-md mb-4"
                    data-aos="zoom-in"
                  ></div>
                )}
              <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">
                {project.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <Link
                to=""
                className="text-gray-400 text-sm mt-2 inline-flex items-center"
              >
                Read more <span className="ml-1">&#10140;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
