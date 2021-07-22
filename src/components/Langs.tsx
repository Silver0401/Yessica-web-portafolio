import anime from "animejs";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Languages: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    anime({
      targets: "#innerBar1",
      duration: 1000,
      easing: "spring(2,100,5,0)",
      delay: 3500,
      width: ["0%", "97%"],
    });
    anime({
      targets: "#innerBar2",
      duration: 1000,
      easing: "spring(2,100,5,0)",
      delay: 3500,
      width: ["0%", "67%"],
    });
    anime({
      targets: "#innerBar3",
      duration: 1000,
      easing: "spring(2,100,5,0)",
      delay: 3500,
      width: ["0%", "25%"],
    });
  }, []);

  return (
    <section className="LangsInfo">
      <span className="spanishBox">
        <h2>{t("Languages.Spanish.Title")}</h2>
        <h3 id="percentage">100%</h3>
        <div className="outerBar">
          <div className="innerBar" id="innerBar1" />
        </div>
        <p>{t("Languages.Spanish.Description")}</p>
      </span>
      <span className="englishBox">
        <h2>{t("Languages.English.Title")}</h2>
        <h3 id="percentage">70%</h3>
        <div className="outerBar">
          <div className="innerBar" id="innerBar2" />
        </div>
        <p>{t("Languages.English.Description")}</p>
      </span>
      <span className="frenchBox">
        <h2>{t("Languages.French.Title")}</h2>
        <h3 id="percentage">20%</h3>
        <div className="outerBar">
          <div className="innerBar" id="innerBar3" />
        </div>
        <p>{t("Languages.French.Description")}</p>
      </span>
    </section>
  );
};

export default Languages;
