import React from "react";
import { useTranslation } from "react-i18next";
import { FaBeer, FaCode, FaCodeBranch } from "react-icons/fa";
import { CiGlobe  } from "react-icons/ci";
import { TiThMenuOutline  } from "react-icons/ti";
import { LuNfc } from "react-icons/lu";
import { MdCampaign } from "react-icons/md";

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
            <TiThMenuOutline size={50} />
            <h3>{t("features.feature1.title")}</h3>
            {/* <p>{t("features.feature1.description")}</p> */}
          </div>
          <div className="col-xs-6 col-md-3">
            <CiGlobe size={50} />
            <h3>{t("features.feature2.title")}</h3>
            {/* <p>{t("features.feature1.description")}</p> */}
          </div>
          <div className="col-xs-6 col-md-3">
            <MdCampaign size={50} />
            <h3>{t("features.feature3.title")}</h3>
            {/* <p>{t("features.feature1.description")}</p> */}
          </div>
          <div className="col-xs-6 col-md-3">
            <LuNfc size={50} />
            <h3>{t("features.feature4.title")}</h3>
            {/* <p>{t("features.feature4.description")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
