import React from "react";
import { useTranslation } from "react-i18next";
export const About = (props) => {
  const { t } = useTranslation();
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("about.title")}</h2>
              <p>{t("about.description")}</p>
              <h3>{t("about.whyChooseUs")}</h3>
              <div className="list-style">
                <div>
                <h5>{t("about.why1")}</h5>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
