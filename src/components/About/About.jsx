// import { useTranslation } from 'react-i18next';
import t from '../../i18n/messages/translate';
import oliImg from '../../assets/Oli.jpg';
import './About.css';

function About() {
  return (
    <section
      id='about'
      className='container fc-neutral bg-neutral-800 section-height-100dvh fs-body padding-block-900 flow'
    >
      <h2 className='sub-heading fs-sub-heading fw-bold'>{t('about1')}</h2>
      <div className='about-layout fc-neutral-200'>
        <div className='about-me-text'>
          <p>{t('aboutMe1')}</p>
          <p>{t('aboutMe2')}</p>
          <p>{t('aboutMe3')}</p>
        </div>

        <img className='portrait' src={oliImg} alt='oli-img' />
      </div>
    </section>
  );
}

export default About;
