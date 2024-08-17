// Component Imports
// import { useTranslation } from 'react-i18next';
import t from '../../../i18n/messages/translate';
import { ButtonLink, Button } from '../../Buttons';

// Asset Imports
import cvPDF from '../../../assets/oliverj_cv.pdf';
import pl from '../../../assets/pl.png';
import en from '../../../assets/uk.png';

function MobileMenu({ onClick, handleLangChange }) {
  // const { t } = useTranslation();

  const handleScroll = (e, scrollTo) => {
    e.preventDefault();
    document.getElementById(scrollTo).scrollIntoView();
    onClick();
  };

  return (
    <nav className='secondary-nav requires-no-scroll' id='secondary-nav'>
      <div className='width-fit'>
        <ul aria-label='Secondary' className='nav-list-sm'>
          <li>
            <div
              className='underline mobile'
              onClick={(e) => handleScroll(e, 'about')}
            >
              {t('about1')}
            </div>
          </li>
          <li>
            <div
              className='underline mobile'
              onClick={(e) => handleScroll(e, 'projects')}
            >
              {t('projects2')}
            </div>
          </li>
          <li>
            <div
              className='underline mobile'
              onClick={(e) => handleScroll(e, 'connect')}
            >
              {t('contact3')}
            </div>
          </li>
          <li>
            <ButtonLink inverted body={t('resume')} link={cvPDF} />
          </li>
          <li className='mob-languages'>
            <div className='' onClick={() => handleLangChange('en-us')}>
              <img className='flag-mob' src={en} alt='english' />
            </div>
            <div className='' onClick={() => handleLangChange('pl-PL')}>
              <img className='flag-mob' src={pl} alt='polish' />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
