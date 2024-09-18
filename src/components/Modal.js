import React, { useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const CloseButton = styled.button`
  background: #ff5a5f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    background: #ff3b3f;
  }
`;

const ImageTextWrapper = styled.div`
  margin-top: 60px; /* Space for title */
  display: block;
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  float: left; /* Floats the image to the left, allowing text to wrap around */
`;

const TextContent = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  clear: none; /* Allows text to wrap around the floated image */
`;

const PdfLink = styled.a`
  margin-top: 20px;
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  // Split the description by newline characters (\n) and create paragraphs
  const descriptionParagraphs = project.detailedDescription
    .split("\n")
    .map((text, index) => <p key={index}>{text}</p>);

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>{project.title}</Title>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <ImageTextWrapper>
          {/* Conditionally render the image based on showImage */}
          {project.showImage && (
            <Image src={project.imageUrl} alt={project.title} />
          )}
          <TextContent>{descriptionParagraphs}</TextContent>
        </ImageTextWrapper>

        {/* Conditionally render PDF link as a download option */}
        {project.pdfLink && project.pdfLink !== "" && (
          <PdfLink href={project.pdfLink} download>
            Download Full Report (PDF)
          </PdfLink>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
