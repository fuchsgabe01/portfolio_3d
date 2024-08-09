import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  //margin-left: 10%;
  justify-content: space-evenly; // Ensure projects are spaced evenly
`;

const ProjectsGrid = ({ projects, activeCategory, onReadMore }) => {
  return (
    <ProjectsContainer>
      {projects
        .filter(
          (project) =>
            activeCategory === "All" || project.category === activeCategory
        )
        .map((project) => (
          <Project key={project.id} project={project} onReadMore={onReadMore} />
        ))}
    </ProjectsContainer>
  );
};

export default ProjectsGrid;
