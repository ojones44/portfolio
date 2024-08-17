// CSS Imports
import './WelcomeMessage.css';

// Component Imports
// import { useTranslation } from 'react-i18next';
import t from '../../i18n/messages/translate';
import Socials from '../Socials/Socials';
import { Button } from '../Buttons';

// i18n imports

function WelcomeMessage() {
  // const { t } = useTranslation();

  const handleScroll = (e, scrollTo) => {
    e.preventDefault();
    document.getElementById(scrollTo).scrollIntoView();
  };

  return (
    <section className='landing center-v'>
      <div className='greeting-div'>
        <h3 className='fw-regular fs-small-sub ff-pop'>{t('greet')}</h3>
        <h1 className='fw-bold fs-heading text-primary-800'>Oliver Jones.</h1>
        <section className='scroll flow'>
          <div>
            <div className='word-scroll'>
              <span>{t('trait1')} 👨🏻‍💻</span>
              <span>{t('trait2')} 🎸</span>
              <span>{t('trait3')} ☕</span>
              <span>{t('trait4')} 🏎️</span>
              <span>{t('trait5')} 🎵</span>
              <span>{t('trait6')} 🥟</span>
            </div>
          </div>
        </section>
        <Button onClick={(e) => handleScroll(e, 'connect')}>
          {t('connectMe')}
        </Button>
        <Socials />
      </div>
    </section>
  );
}

export default WelcomeMessage;
