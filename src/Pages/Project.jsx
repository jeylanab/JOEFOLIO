import React from "react";
import ProjectList from "../Components/Project/ProjectList";
import {projects} from "../Components/Project/ProjectList";

const Project = () => {
  return (
    <section className="space-y-8 px-6">
      {projects.map((project) => (
        <ProjectList key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Project;