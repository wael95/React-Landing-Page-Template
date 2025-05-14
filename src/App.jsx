import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./i18n/i18n";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { i18n } = useTranslation();
  const [landingPageData, setLandingPageData] = useState({});
  const [isRTL, setIsRTL] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    // Update RTL based on language
    setIsRTL(i18n.language === 'ar');
    // Update document direction
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);



  return (
    <div className={isRTL ? 'rtl' : ''}>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.ourClients} />
      <Contact data={landingPageData.Contact} />
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: isRTL ? 'unset' : '20px',
        left: isRTL ? '20px' : 'unset',
        zIndex: 1000
      }}>
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: isRTL ? 'unset' : '0',
          left: isRTL ? '0' : 'unset',
          backgroundColor: '#fff',
          padding: '8px 15px',
          borderRadius: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          whiteSpace: 'nowrap',
          fontSize: '14px'
        }}>
          {t("How")}
        </div>
        <a 
          href="https://wa.me/966557794839?text=Hello%20Ninput%0AI%20need%20help"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25D366',
            color: '#fff',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
            fontSize: '35px'
          }}
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
