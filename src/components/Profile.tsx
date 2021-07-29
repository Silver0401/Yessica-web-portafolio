import React from "react";
import { useTranslation } from "react-i18next";

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="ProfileInfo">
      <p>{t("PersonalProfileParagraph")}</p>
    </section>
  );
};

export default Profile;
