import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const ProjectCard = ({ title, main }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#0c0e19] relative group/card w-80 h-auto rounded-2xl p-6 border border-[#465697]/20">
        <CardItem translateZ="50" className="w-full">
          <img className="w-full h-48 object-cover rounded-xl" src={bannerImg} alt="" />
        </CardItem>
        
        <CardItem
          translateZ="60"
          className="text-xl md:text-2xl font-bold text-white mt-4"
        >
          {title}
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="80"
          className="text-sm md:text-md text-white/70 mt-2"
        >
          {main}
        </CardItem>

        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-3xl bg-[#465697] text-white text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold"
          >
            Demo
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-3xl bg-[#465697] text-white text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold"
          >
            Source Code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
