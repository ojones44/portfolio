// React Imports
import React, { useState, useEffect } from 'react';

// Component Imports
import { I18nProvider, LOCALES } from '../i18n';
import t from '../i18n/messages/translate';
import Navbar from '../components/Navbar/Navbar';
import WelcomeMessage from '../components/Welcome/WelcomeMessage';
import About from '../components/About/About';
import { Projects } from '../components/Projects/Projects';
import Connect from '../components/Connect/Connect';
import Footer from '../components/Footer/Footer';

// Language Imports
import languages from '../i18n/languages';

function Home() {
  const [locale, setLocale] = useState(
    localStorage.getItem('languageCode') || LOCALES.ENGLISH
  );
  const [displayLang, setDisplayLang] = useState(
    localStorage.getItem('language') ||
      localStorage.setItem('language', 'English')
  );
  const [mobNavOpen, setMobNavOpen] = useState(false);
  const [langNavOpen, setLangNavOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 800) {
      setMobNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('languageCode', locale);
  }, [locale]);

  const handleLangChange = (e) => {
    setLocale(e.target.value);
    setLangNavOpen(false);

    languages.forEach((language) => {
      if (language.locale === e.target.value) {
        setDisplayLang(e.target.value);
        localStorage.setItem('language', language.lang);
      }
    });
  };

  const handleMobNavOpen = () => {
    setMobNavOpen(!mobNavOpen);
  };

  const handleLangNavOpen = () => {
    setLangNavOpen(!langNavOpen);
  };

  return (
    <I18nProvider locale={locale}>
      <div className='app bg-primary-100'>
        <section className='top-section'>
          <Navbar
            t={t}
            languages={languages}
            langChange={handleLangChange}
            mobNavOpen={handleMobNavOpen}
            langNavOpen={handleLangNavOpen}
            isLangNavOpen={langNavOpen}
            isMobNavOpen={mobNavOpen}
            displayLang={displayLang}
            locale={locale}
          />
          <WelcomeMessage t={t} />
        </section>
        <section className='bg-neutral-800 fc-netural'>
          <About t={t} />
          <Projects t={t} />
          <Connect t={t} />
        </section>
        <Footer t={t} />
      </div>
    </I18nProvider>
  );
}

export default Home;
