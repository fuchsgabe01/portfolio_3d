import React from "react";
import styled from "styled-components";

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 0px solid #ccc;
  background: ${(props) => (props.active ? "#add8e6" : "white")};
  cursor: pointer;
  width: 120px;
  border-radius: 20px;
  margin: 0 5px;
  transition: background 0.3s, border-color 0.3s;

  &:hover {
    background: ${(props) => (props.active ? "#add8e6" : "#eee")};
  }

  &.active {
    background: #add8e6;
    border-color: #aaa;
  }
`;

const FilterBar = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <FilterBarContainer>
      {categories.map((category) => (
        <FilterButton
          key={category}
          onClick={() => setActiveCategory(category)}
          active={activeCategory === category}
        >
          {category}
        </FilterButton>
      ))}
    </FilterBarContainer>
  );
};

export default FilterBar;
