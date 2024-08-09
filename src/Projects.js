import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterBar from "./components/FilterBar";
import ProjectsGrid from "./components/ProjectsGrid";
import Modal from "./components/Modal";

const ProjectsFullContainer = styled.div`
  min-height: 1000px;
`;

const MyWorks = styled.div`
  text-align: center;
  color: #333;
  font-family: monospace;
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 0.5%;
  margin-top: -3%;
`;

const Projects = () => {
  const allCategories = ["All", "Tech", "Hardware", "Creative"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleReadMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsFullContainer>
      <MyWorks>MY WORKS</MyWorks>
      <FilterBar
        categories={allCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProjectsGrid
        projects={projects}
        activeCategory={activeCategory}
        onReadMore={handleReadMore}
      />
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </ProjectsFullContainer>
  );
};

export default Projects;
