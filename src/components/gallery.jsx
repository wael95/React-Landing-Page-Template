import { Image } from "./image";
import React from "react";
import { useTranslation } from "react-i18next";
export const Gallery = (props) => {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("gallery.title")}</h2>
          <p>{t("gallery.description")}</p>
          <p>{t("gallery.description2")}</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    style={{
                      margin: "0 auto",
                      padding: "10px",
                      flex: "0 0 33.33%",
                      maxWidth: "33.33%",
                      width: "400px",
                      height: "300px",
                    }}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
