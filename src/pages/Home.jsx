// React Imports
import React, { useState, useEffect } from 'react';

// Component Imports
import { I18nProvider, LOCALES } from '../i18n';
import t from '../i18n/messages/translate';
import Navbar from '../components/Navbar';
import WelcomeMessage from '../components/WelcomeMessage';
import About from '../components/About';
import { Projects } from '../components/Projects';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

// Language Imports
import languages from '../i18n/languages';

function Home() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [mobNavOpen, setMobNavOpen] = useState(false);

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

  const handleClick = () => {
    setMobNavOpen(!mobNavOpen);
  };

  const handleLangChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <I18nProvider locale={locale}>
      <div className='app bg-primary-100'>
        <Navbar
          t={t}
          languages={languages}
          langChange={handleLangChange}
          mobNavOpen={handleClick}
          isOpen={mobNavOpen}
        />
        <main>
          <WelcomeMessage t={t} />
          <section className='bg-neutral-800 fc-netural'>
            <About t={t} />
            <Projects t={t} />
            <Connect t={t} />
          </section>
        </main>
        <Footer t={t} />
      </div>
    </I18nProvider>
  );
}

export default Home;
