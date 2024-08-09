import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectBlock = styled(motion.div)`
  width: 35%; // Adjusted width to fit two per row
  display: flex;
  flex-direction: row;
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between; // Align title on the left and type on the right
  width: 100%; // Ensure the wrapper takes the full width
`;

const ProjectTitle = styled.h3`
  font-weight: bold;
  margin: 0;
`;

const ProjectType = styled.span`
  font-size: 0.7em;
  color: #858585;
  align-self: flex-start; // Ensure it aligns with the top of the title
  margin-top: 4px; // Adjust this to align perfectly with the title's first line
`;

const ProjectDescription = styled.p`
  margin: 10px 0;
`;

const ReadMoreButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Project = ({ project, onReadMore }) => {
  return (
    <ProjectBlock
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectImage src={project.imageUrl} alt={project.title} />
      <ProjectInfo>
        <TitleWrapper>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectType>{project.category}</ProjectType>
        </TitleWrapper>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ReadMoreButton onClick={() => onReadMore(project)}>
          Read More
        </ReadMoreButton>
      </ProjectInfo>
    </ProjectBlock>
  );
};

export default Project;
