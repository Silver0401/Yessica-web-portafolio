import React, { useState } from "react";
import { SkillType, OnOff } from "./../types";
import { useTranslation } from "react-i18next";

// Icons
import ArduinoIcon from "./../resources/ArduinoIcon.png";
import arIcon from "./../resources/arIcon.png";
import aspIcon from "./../resources/aspIcon.png";
import CIcon from "./../resources/CIcon.png";
import HtmlIcon from "./../resources/html.png";
import ImgVidEditIcon from "./../resources/ImgVidEdit.jpeg";
import iworkIcon from "./../resources/iwork.png";
import javaIcon from "./../resources/java.png";
import jsIcon from "./../resources/js.png";
import mySQLIcon from "./../resources/mySQL.png";
import officeIcon from "./../resources/officeLogo.png";
import vsIcon from "./../resources/vsLogo.png";
import vrIcon from "./../resources/vrIcon.png";
import websiteIcon from "./../resources/website.png";
import gsuiteIcon from "./../resources/gsuite-logo.png";
import tstyVidIcon from "./../resources/360vid.png";
import D3PrintIcon from "./../resources/3dPrintIcon.png";

const Skills: React.FC = () => {
  const [softwareSkillState, setSoftwareSkillState] = useState<OnOff>("on");
  const [languageSkillState, setLanguageSkillState] = useState<OnOff>("on");
  const { t } = useTranslation();

  const createSkillBox = (
    SkillName: string,
    SkillImg: string,
    type: SkillType
  ) => {
    if (type === "language") {
      return (
        <div
          className="skillBox"
          style={
            languageSkillState === "on" ? { opacity: 1 } : { display: "none" }
          }
        >
          <div className="skillsImgContainer">
            <img alt={`${SkillName}Vector`} src={SkillImg} />
          </div>
          <div className="titleContainer">
            <h1>{SkillName}</h1>
          </div>
        </div>
      );
    } else if (type === "software") {
      return (
        <div
          className="skillBox"
          style={
            softwareSkillState === "on" ? { opacity: 1 } : { display: "none" }
          }
        >
          <div className="skillsImgContainer">
            <img alt={`${SkillName}Vector`} src={SkillImg} />
          </div>
          <div className="titleContainer">
            <h1>{SkillName}</h1>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="SkillsInfo">
      <div className="selectContainer">
        <span>
          <label>{t("Skills.Software")}</label>
          <input
            onClick={() =>
              setSoftwareSkillState(softwareSkillState === "on" ? "off" : "on")
            }
            defaultChecked
            value={softwareSkillState}
            type="checkbox"
            className="tools"
          />
        </span>
        <span>
          <label>{t("Skills.Languages")}</label>
          <input
            onClick={() =>
              setLanguageSkillState(languageSkillState === "on" ? "off" : "on")
            }
            defaultChecked
            value={languageSkillState}
            type="checkbox"
            className="langs"
          />
        </span>
      </div>
      <div className="SkillsContainer">
        {createSkillBox("Office", officeIcon, "software")}
        {createSkillBox("iWork", iworkIcon, "software")}
        {createSkillBox("Google Suite", gsuiteIcon, "software")}
        {createSkillBox("Web Development", websiteIcon, "software")}
        {createSkillBox("Digital Editing", ImgVidEditIcon, "software")}
        {createSkillBox("360 Videos", tstyVidIcon, "software")}
        {createSkillBox("Virtual Reality", vrIcon, "software")}
        {createSkillBox("Augmented Reality", arIcon, "software")}
        {createSkillBox("3D Printing", D3PrintIcon, "software")}
        {createSkillBox("mySQL", mySQLIcon, "language")}
        {createSkillBox("HTML", HtmlIcon, "language")}
        {createSkillBox("JavaScript", jsIcon, "language")}
        {createSkillBox("C", CIcon, "language")}
        {createSkillBox("Java", javaIcon, "language")}
        {createSkillBox("Arduino", ArduinoIcon, "language")}
        {createSkillBox("ASP.NET", aspIcon, "language")}
        {createSkillBox("Visual Studio", vsIcon, "software")}
      </div>
    </section>
  );
};

export default Skills;
