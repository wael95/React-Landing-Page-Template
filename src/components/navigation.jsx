import React from "react";
import logo from "../Img/logo-dark.png";
import { useTranslation } from "react-i18next";
export const Navigation = (props) => {
  const { t } = useTranslation();
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src={logo}
              alt="logo"
              style={{ maxHeight: "70px", width: "auto", marginTop: "-20px" }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                {t("header.about")}
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                {t("header.portfolio")}
              </a>
            </li>

            {/* <li>
              <a href="#services" className="page-scroll">
                {t("header.services")}
              </a>
            </li> */}
            <li>
              <a href="#portfolio" className="page-scroll">
                {t("header.gallery")}
              </a>
            </li>
            <li>
              <a href="#clients" className="page-scroll">
                {t("header.team")}
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                {t("header.testimonials")}
              </a>
            </li> */}
            
            <li>
              <a href="#contact" className="page-scroll">
                {t("header.contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
