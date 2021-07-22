import React from "react";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="EducationInfo">
      <ul>
        <li id="ulTitle">
          <h2>{t("Education.Title1")}</h2>
        </li>
        <li>
          <p>
            <strong>{t("Education.Institution.Title")}</strong>{" "}
            {t("Education.Institution.ITP")}
          </p>
          <p id="Description">
            <strong>{t("Education.Career.Title")}</strong>
            {t("Education.Career.ISC")}
          </p>
          <p id="Date">{t("Education.Duration.Title")} 1996 - 2000 </p>
        </li>
        <li>
          <p>
            <strong>{t("Education.Institution.Title")}</strong>
            {t("Education.Institution.ITESM")}
          </p>
          <p id="Description">
            <strong>{t("Education.Career.Title")}</strong>{" "}
            {t("Education.Career.MCC")}
          </p>
          <p id="Date">{t("Education.Duration.Title")} 2001 - 2003</p>
        </li>
        <li>
          <p>
            <strong>{t("Education.Institution.Title")}</strong>{" "}
            {t("Education.Institution.UTEL")}
          </p>
          <p id="Description">
            <strong>{t("Education.Career.Title")}</strong>{" "}
            {t("Education.Career.MED")}
          </p>
          <p id="Date">{t("Education.Duration.Title")} 2018 - 2020</p>
        </li>
        <li id="ulTitle">
          <h2>{t("Education.Title2")}</h2>
        </li>
        <li>
          <p>{t("Education.paragraph1")}</p>
          <p id="Date">{t("Education.April")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph2")}</p>
          <p id="Date">{t("Education.April")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph3")}</p>
          <p id="Date">{t("Education.April")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph4")}</p>
          <p id="Date">{t("Education.April")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph5")}</p>
          <p id="Date">{t("Education.April")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph6")}</p>
          <p id="Date">{t("Education.April")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph7")}</p>
          <p id="Date">{t("Education.April")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph8")}</p>
          <p id="Date">{t("Education.January")} 2004</p>
        </li>
        <li>
          <p>{t("Education.paragraph9")}</p>
          <p id="Date">{t("Education.June")} 2004</p>
        </li>
        <li>
          <p>{t("Education.paragraph10")}</p>
          <p id="Date">{t("Education.June")} 2004</p>
        </li>
        <li>
          <p>{t("Education.paragraph11")}</p>
          <p id="Date">{t("Education.January")} 2002</p>
        </li>
        <li>
          <p>{t("Education.paragraph12")}</p>
          <p id="Date">{t("Education.January")} 2002</p>
        </li>
        <li>
          <p>{t("Education.paragraph13")}</p>
          <p id="Date">{t("Education.November")} 2007</p>
        </li>
        <li>
          <p>{t("Education.paragraph14")}</p>
          <p id="Date">{t("Education.March")} 2015</p>
        </li>
        <li>
          <p>{t("Education.paragraph15")}</p>
          <p id="Date">{t("Education.December")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph16")}</p>
          <p id="Date">{t("Education.December")} 2013</p>
        </li>
        <li>
          <p>{t("Education.paragraph17")}</p>
          <p id="Date">{t("Education.May")} 2016</p>
        </li>
        <li>
          <p>{t("Education.paragraph18")}</p>
          <p id="Date">{t("Education.December")} 2016</p>
        </li>
        <li>
          <p>{t("Education.paragraph19")}</p>
          <p id="Date">{t("Education.December")} 2014 al 2016</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
