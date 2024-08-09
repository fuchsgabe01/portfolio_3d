import styled from "styled-components";
import { motion } from "framer-motion";
import CubeScene from "./CubeScene"; // 3d card
import Projects from "./Projects"; // 3d card

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const Website = styled.div`
  background-color: #ffffff;
  overflow-x: hidden;
  width: 100%;
`;

const IntroSection = styled.div`
  margin-top: -7%;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; // This centers the children vertically
  padding: 20px; // Add some padding around the content
`;

// holds threejs object
const RightSection = styled.div`
  flex: 1; // Take up equal amount of space as the left section
  padding-left: 20px;
  margin-top: -15%;
`;

// name and intro paragraph
const LeftSection = styled.div`
  margin-top: 9%;
  color: #333;
  padding-left: 4%;
  font-family: "Montserrat", sans-serif;
  max-width: 50%;
`;

const StyledHeader1 = styled.h1`
  font-size: 1em;
  margin-bottom: -1em;
  position: relative;

  &::before {
    content: "—";
    display: inline-block;
    margin-right: 10px;
  }
`;

const StyledHeader2 = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  position: relative;
`;

const FirstName = styled.span`
  background-color: #424242; // This should be the highlight color from the design
  color: white;
  padding: 0 5px;
`;

const SubHeader = styled.h2`
  font-weight: normal;
  font-size: 1.2em;
  margin-bottom: 2em;
`;

const IntroText = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin-top: 20px;
  color: #333;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #00a4ba; /* A distinct, readable color. Adjust as needed. */
`;

const IconLink = styled.a`
  color: #333; // Initial icon color
  margin: 0 10px; // Give some space between the icons
  transition: color 0.2s, transform 0.2s; // Smooth transition for color and transform

  &:hover {
    color: #00a4ba; // Color on hover
    transform: scale(1.2); // Increase size on hover
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: left; // Centers the icons
  align-items: center;
  margin-top: 20px; // Spacing from the text above
`;

function App() {
  return (
    <Website>
      <IntroSection>
        <SectionContainer>
          <LeftSection>
            <StyledHeader1>HELLO</StyledHeader1>
            <StyledHeader2>
              I am <FirstName>Gabe</FirstName> Fuchs
            </StyledHeader2>
            <IntroText>
              I'm a final-year <Highlight>Mechanical Engineering</Highlight>{" "}
              undergrad diving into a{" "}
              <Highlight>Master of Engineering in Computer Science</Highlight>,
              aiming for completion in December 2024. My passion lies at the
              crossroads of engineering and computing, particularly in the
              dynamic world of <Highlight>robotics</Highlight>.
              <br />
              <br />
              Driven by a broad base of knowledge in technology and engineering,
              I'm <Highlight>actively seeking a role</Highlight> where I can
              contribute to pioneering solutions and collaborative ventures. If
              you're on the lookout for someone{" "}
              <Highlight>passionate</Highlight> about{" "}
              <Highlight>driving innovation</Highlight> and ready to tackle
              challenges in the tech world, I'm your candidate.
            </IntroText>
            <SocialIconsContainer>
              <IconLink
                href="https://www.linkedin.com/in/gabriel-fuchs"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </IconLink>
              <IconLink href="mailto:gdf42@cornell.edu" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </IconLink>
              <IconLink
                href="/resume.pdf"
                download
                aria-label="Download Resume"
              >
                <FontAwesomeIcon icon={faFilePdf} size="2x" />
              </IconLink>
            </SocialIconsContainer>
          </LeftSection>
          <RightSection>
            <CubeScene />
          </RightSection>
        </SectionContainer>
      </IntroSection>
      <Projects />
    </Website>
  );
}

export default App;
