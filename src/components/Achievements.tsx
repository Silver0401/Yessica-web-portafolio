import React from "react";
import { useTranslation } from "react-i18next";

const Achievements: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="AchievementsInfo">
      <ul>
        <li>
          <p>
            {t("Achievements.Line1.1")}
            <strong>{t("Achievements.Line1.2")}</strong>
          </p>
        </li>
        <li>
          <p>
            {t("Achievements.Line2.1")}
            <strong>{t("Achievements.Line2.2")}</strong>
            {t("Achievements.Line2.3")}
            <strong>{t("Achievements.Line2.4")}</strong>
          </p>
        </li>
        <li>
          <p>
            {t("Achievements.Line3.1")}
            <strong>{t("Achievements.Line3.2")}</strong>
            {t("Achievements.Line3.3")}
          </p>
          <p>{t("Achievements.Line3.4")}</p>
          <p>{t("Achievements.Line3.5")}</p>
          <p>{t("Achievements.Line3.6")}</p>
          <p>{t("Achievements.Line3.7")}</p>
          <p>{t("Achievements.Line3.8")}</p>
        </li>
        <li>
          <p>
            <strong>{t("Achievements.Line4.1")}</strong>
          </p>
          <p>{t("Achievements.Line4.2")}</p>
          <p>{t("Achievements.Line4.3")}</p>
          <p>{t("Achievements.Line4.4")}</p>
          <p>{t("Achievements.Line4.5")}</p>
          <p>{t("Achievements.Line4.6")}</p>
        </li>
        <li>
          <p>
            <strong>{t("Achievements.Line5.1")}</strong>
            {t("Achievements.Line5.2")}
          </p>
        </li>
        <li>
          <p>
            <strong>{t("Achievements.Line5.3")}</strong>
            {t("Achievements.Line5.4")}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Achievements;
