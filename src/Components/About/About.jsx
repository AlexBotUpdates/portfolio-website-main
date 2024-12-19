import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { TextRevealCard } from "../ui/text-reveal-card";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 bg-opacity-30 rounded-lg"
    >
      <div>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <ul>
            <div className="flex gap-3 py-4 group">
              <IoArrowForward size={30} className="mt-1" />
              <TextRevealCard
                text="Frontend Developer"
                revealText="Frontend Developer"
                className="w-full md:w-96 p-0 group-hover:opacity-100"
              >
                <p className="text-sm md:text-md leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "Expert in building dynamic and responsive user interfaces using React."
                  "Skilled in crafting visually engaging designs with CSS and Bootstrap."
                  "Proficient in adding interactive elements using Tailwind."
                </p>
              </TextRevealCard>
            </div>

            <div className="flex gap-3 py-4 group">
              <IoArrowForward size={30} className="mt-1" />
              <TextRevealCard
                text="AI/Tech Innovator"
                revealText="AI/Tech Innovator"
                className="w-full md:w-96 p-0 group-hover:opacity-100"
              >
                <p className="text-sm md:text-md leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "Currently working on deploying an AI image generation tool using advanced machine learning techniques."
                  "Building a web application that leverages AI to generate images based on user prompts."
                  "Integrating AI models with backend services to provide real-time image generation."
                </p>
              </TextRevealCard>
            </div>

            <div className="flex gap-3 py-4 group">
              <IoArrowForward size={30} className="mt-1" />
              <TextRevealCard
                text="Backend Developer"
                revealText="Backend Developer"
                className="w-full md:w-96 p-0 group-hover:opacity-100"
              >
                <p className="text-sm md:text-md leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "Developing robust backend systems using Node.js and Express."
                  "Implementing secure authentication and authorization mechanisms."
                  "Integrating AI models with backend services to provide real-time image generation."
                </p>
              </TextRevealCard>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
