// CSS Imports
import './WelcomeMessage.css';

// Component Imports
import Socials from '../Socials/Socials';
import { Button } from '../Buttons';

function WelcomeMessage({ t }) {
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
              <span>Writer of Code 👨🏻‍💻</span>
              <span>Player of Guitar 🎸</span>
              <span>Drinker of Coffee ☕</span>
              <span>Fan of Formula 1 🏎️</span>
              <span>Lover of Music 🎵</span>
              <span>Speaker of Polish 🥟</span>
            </div>
          </div>
        </section>
        <Button
          body={t('connectMe')}
          onClick={(e) => handleScroll(e, 'connect')}
        />
        <Socials />
      </div>
    </section>
  );
}

export default WelcomeMessage;
