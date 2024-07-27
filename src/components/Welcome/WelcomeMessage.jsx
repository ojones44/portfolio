// CSS Imports
import './WelcomeMessage.css';

// Component Imports
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
        <div className='social-nav'>
          <a
            href='https://github.com/ojones44'
            target='_blank'
            rel='noreferrer'
            className='github'
          >
            <FiGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/oliverj1994'
            target='_blank'
            rel='noreferrer'
            className='linkedin'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://twitter.com/oliverj1994'
            target='_blank'
            rel='noreferrer'
            className='twitter'
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
