import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="flex flex-wrap gap-5 justify-center">
      <ProjectCard
        title="Blogging Website"
        main="this is a bloggin website created in next js and used some component library used some component library"
      />
      <ProjectCard
        title="Youtue Clone"
        main="this is a bloggin website created in next js and used some component library used some component library"
      />
      <ProjectCard
        title="Netflix Clone"
        main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
      />
    </div>
  );
};

export default Projects;
