import React from "react";
import { useTranslation } from "react-i18next";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="ExperienceInfo">
      <ul id="outerUl">
        <li id="Title">
          <h2>{t("Experience.Title1")}</h2>
        </li>
        <li>
          <p>
            <strong>{t("Experience.Institution.Name.Title")} </strong>{" "}
            {t("Experience.Institution1.Name")}
          </p>
          <p>
            <strong>{t("Experience.Institution.Position.Title")} </strong>{" "}
            {t("Experience.Institution1.Position")}
          </p>
          <p>
            <strong>{t("Experience.Institution.Activities.Title")} </strong>
          </p>
          <ul>
            <li>- {t("Experience.Institution1.Activity1")}</li>
            <li>- {t("Experience.Institution1.Activity2")}</li>
            <li>- {t("Experience.Institution1.Activity3")}</li>
            <li>- {t("Experience.Institution1.Activity4")}</li>
            <li>- {t("Experience.Institution1.Activity5")}</li>
            <li>- {t("Experience.Institution1.Activity6")}</li>
            <li>- {t("Experience.Institution1.Activity7")}</li>
            <li>- {t("Experience.Institution1.Activity8")}</li>
            <li>- {t("Experience.Institution1.Activity9")}</li>
          </ul>
          <div className="bulletPoint" />
        </li>

        <li>
          <p>
            <strong>{t("Experience.Institution.Name.Title")}</strong>{" "}
            {t("Experience.Institution2.Name")}
          </p>
          <p>
            <strong>{t("Experience.Institution.Position.Title")} </strong>
          </p>
          <ul>
            <li>- {t("Experience.Institution2.Position1")}</li>
            <li>- {t("Experience.Institution2.Position2")}</li>
          </ul>
          <div className="bulletPoint" />
        </li>

        <li>
          <p>
            <strong>{t("Experience.Institution.Name.Title")}</strong>{" "}
            {t("Experience.Institution3.Name")}
          </p>
          <p>
            <strong>{t("Experience.Institution.Position.Title")}</strong>{" "}
            {t("Experience.Institution3.Position")}
          </p>
          <p>
            <strong>{t("Experience.Institution.Activities.Title")}</strong>
          </p>
          <ul>
            <li>- {t("Experience.Institution3.Activity1")}</li>
            <li>- {t("Experience.Institution3.Activity2")}</li>
            <li>- {t("Experience.Institution3.Activity3")}</li>
          </ul>
          <div className="bulletPoint" />
        </li>

        <li id="Title">
          <h2>{t("Experience.Title2")}</h2>
        </li>

        <li>
          <p>
            <strong>{t("Experience.Institution.Name.Title")}</strong>{" "}
            {t("Experience.Institution2.Name")}
          </p>
          <p>
            <strong>{t("Experience.Institution.Professor.Title")}</strong>
          </p>
          <ul>
            <li>- {t("Experience.Institution2.Subject1")}</li>
            <li>- {t("Experience.Institution2.Subject2")}</li>
            <li>- {t("Experience.Institution2.Subject3")}</li>
            <li>- {t("Experience.Institution2.Subject4")}</li>
            <li>- {t("Experience.Institution2.Subject5")}</li>
            <li>- {t("Experience.Institution2.Subject6")}</li>
            <li>- {t("Experience.Institution2.Subject7")}</li>
            <li>- {t("Experience.Institution2.Subject8")}</li>
            <li>- {t("Experience.Institution2.Subject9")}</li>
            <li>- {t("Experience.Institution2.Subject10")}</li>
            <li>- {t("Experience.Institution2.Subject11")}</li>
            <li>- {t("Experience.Institution2.Subject12")}</li>
            <li>- {t("Experience.Institution2.Subject13")}</li>
            <li>- {t("Experience.Institution2.Subject14")}</li>
          </ul>
          <div className="bulletPoint" />
        </li>

        <li>
          <p>
            <strong>{t("Experience.Institution.Name.Title")}</strong>{" "}
            {t("Experience.Institution3.Name")}
          </p>
          <p>
            <strong>{t("Experience.Institution.Professor.Title")}</strong>
          </p>
          <ul>
            <li>- {t("Experience.Institution3.Subject1")}</li>
            <li>- {t("Experience.Institution3.Subject2")}</li>
          </ul>
          <div className="bulletPoint" />
        </li>

        <li id="Title">
          <h2>{t("Experience.Title3")}</h2>
        </li>

        <li>
          <p>
            <strong>{t("Experience.Institution.Name.Title")}</strong>{" "}
            {t("Experience.Institution4.Name")}
          </p>
          <p>{t("Experience.Institution4.Investigation")}</p>
          <div className="bulletPoint" />
        </li>

        <li>
          <p>
            <strong>{t("Experience.Institution.Name.Title")}</strong>{" "}
            {t("Experience.Institution2.Name")}
          </p>
          <ul>
            <li>- {t("Experience.Institution2.Investigation1")}</li>
            <li>- {t("Experience.Institution2.Investigation2")}</li>
            <li>- {t("Experience.Institution2.Investigation3")}</li>
            <li>- {t("Experience.Institution2.Investigation4")}</li>
          </ul>
          <div className="bulletPoint" />
        </li>
      </ul>
    </section>
  );
};

export default Experience;
