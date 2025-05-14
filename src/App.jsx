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
    </div>
  );
};

export default App;
