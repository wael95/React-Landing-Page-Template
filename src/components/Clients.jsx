import React from "react";
import { useTranslation } from "react-i18next";
export const Clients = (props) => {
  const { t } = useTranslation();
  return (
    <div id="clients" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{t("ourClients.title")}</h2>
          <p>{t("ourClients.description")}</p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 clients">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="clients-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
