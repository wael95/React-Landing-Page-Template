import React from "react";
import { useTranslation } from "react-i18next";
export const Services = (props) => {
  const { t } = useTranslation();
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("services.title")}</h2>
          <p>
            {t("services.description")}
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className={t("services.service1.icon")}></i>
            <h3>{t("services.service1.title")}</h3>
            <p>{t("services.service1.description")}</p>
          </div>
          <div className="col-md-4">
            <i className={t("services.service2.icon")}></i>
            <h3>{t("services.service2.title")}</h3>
            <p>{t("services.service2.description")}</p>
          </div>
          <div className="col-md-4">
            <i className={t("services.service3.icon")}></i>
            <h3>{t("services.service3.title")}</h3>
            <p>{t("services.service3.description")}</p>
          </div>
          <div className="col-md-4">
            <i className={t("services.service4.icon")}></i>
            <h3>{t("services.service4.title")}</h3>
            <p>{t("services.service4.description")}</p>
          </div>
          {/*props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"*/}
        </div>
      </div>
    </div>
  );
};
