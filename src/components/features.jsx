import React from "react";
import { useTranslation } from "react-i18next";
export const Features = (props) => {
  const { t } = useTranslation();
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t("features.title")}</h2>
        </div>
        <div className="row" style={{ paddingBottom: 20 }}>
          <div className="col-xs-6 col-md-3">
            <i className={`${t("features.feature1.icon")} fa-3x`}></i>
            <h3>{t("features.feature1.title")}</h3>
            {/* <p>{t("features.feature1.description")}</p> */}
          </div>
          <div className="col-xs-6 col-md-3">
            <i className={`${t("features.feature2.icon")} fa-3x`}></i>
            <h3>{t("features.feature2.title")}</h3>
            {/* <p>{t("features.feature1.description")}</p> */}
          </div>
          <div className="col-xs-6 col-md-3">
            <i className={`${t("features.feature3.icon")} fa-3x`}></i>
            <h3>{t("features.feature3.title")}</h3>
            {/* <p>{t("features.feature1.description")}</p> */}
          </div>
          <div className="col-xs-6 col-md-3">
            <i className={`${t("features.feature4.icon")} fa-3x`}></i>
            <h3>{t("features.feature4.title")}</h3>
            {/* <p>{t("features.feature4.description")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
