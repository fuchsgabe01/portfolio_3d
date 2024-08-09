import React from "react";
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
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  background: #ff5a5f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  float: right;

  &:hover {
    background: #ff3b3f;
  }
`;

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <h1>{project.title}</h1>
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{ width: "100%" }}
        />
        <p>{project.detailedDescription}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
