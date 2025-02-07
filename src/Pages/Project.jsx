import React from "react";
import ProjectList from "../Components/Project/ProjectList";
import { projects } from "../Components/Project/ProjectList";

const Project = () => {
  return (
    <section className="space-y-8 px-6">
      <ProjectList projects={projects} />
    </section>
  );
};

export default Project;
