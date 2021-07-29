import React from "react";
import { AnimBoxProps } from "./../types";
import { useTranslation } from "react-i18next";

// Data Components
import SkillsComponent from ".//Skills";
import ContactComponent from ".//Contact";
import EducationComponent from ".//Education";
import ExperienceComponent from ".//Experience";
import LangsComponent from ".//Langs";
import AchievementsComponent from "./Achievements";
import ProfileComponent from "./Profile";

const AnimationBoxes: React.FC<AnimBoxProps> = ({
  setSection,
  sectionSelected,
}) => {
  const { t } = useTranslation();
  const DisplaySelectedSection = () => {
    const Sections = {
      Skills: <SkillsComponent />,
      Contact: <ContactComponent />,
      Education: <EducationComponent />,
      Experience: <ExperienceComponent />,
      Langs: <LangsComponent />,
      Achievements: <AchievementsComponent />,
      Personal: <ProfileComponent />,
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" />
          </svg>
        </button>
        <div className="infoBox">{DisplaySelectedSection()}</div>
      </div>
      <div className="rightAnimBox">
        <button id="FixedButton" onClick={() => setSection("ExitSections")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" />
          </svg>
        </button>
        <div className="infoBox">{DisplaySelectedSection()}</div>
      </div>
    </div>
  );
};

export default AnimationBoxes;
