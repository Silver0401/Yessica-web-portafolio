import React from "react";
import { AnimBoxProps } from "./../types";

// Data Components
import SkillsComponent from "./../components/Skills";
import ContactComponent from "./../components/Contact";
import EducationComponent from "./../components/Education";
import ExperienceComponent from "./../components/Experience";
import LangsComponent from "./../components/Langs";

const AnimationBoxes: React.FC<AnimBoxProps> = ({
  setSection,
  sectionSelected,
}) => {
  const DisplaySelectedSection = () => {
    const Sections = {
      Skills: <SkillsComponent />,
      Contact: <ContactComponent />,
      Education: <EducationComponent />,
      Experience: <ExperienceComponent />,
      Langs: <LangsComponent />,
      Initial: null,
      ExitSections: null,
    };

    return Sections[sectionSelected];
  };

  return (
    <div
      className="AnimationContainer"
      style={
        sectionSelected === "Initial"
          ? { zIndex: 0 }
          : sectionSelected === "ExitSections"
          ? { zIndex: 0 }
          : { zIndex: 2 }
      }
    >
      <div className="leftAnimBox">
        <button id="FixedButton" onClick={() => setSection("ExitSections")}>
          Regresar ↪️
        </button>
        <div className="infoBox">{DisplaySelectedSection()}</div>
      </div>
      <div className="rightAnimBox">
        <button id="FixedButton" onClick={() => setSection("ExitSections")}>
          Regresar ↩️
        </button>
        <div className="infoBox">{DisplaySelectedSection()}</div>
      </div>
    </div>
  );
};

export default AnimationBoxes;
