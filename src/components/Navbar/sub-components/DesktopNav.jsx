// Component Imports
import { ButtonLink } from '../../Buttons';

// Asset Imports
import pl from '../../../assets/pl.png';
import en from '../../../assets/uk.png';
import cvPDF from '../../../assets/oliverj_cv.pdf';

function DesktopNav({ t, locale, langNavOpen }) {
  const handleScroll = (e, scrollTo) => {
    e.preventDefault();
    document.getElementById(scrollTo).scrollIntoView();
  };

  return (
    <nav className='primary-nav' id='primary-nav'>
      <ul aria-label='Primary' className='nav-list'>
        <li>
          <div className='underline' onClick={(e) => handleScroll(e, 'about')}>
            {t('about1')}
          </div>
        </li>
        <li>
          <div
            className='underline'
            onClick={(e) => handleScroll(e, 'projects')}
          >
            {t('projects2')}
          </div>
        </li>
        <li>
          <div
            className='underline'
            onClick={(e) => handleScroll(e, 'connect')}
          >
            {t('contact3')}
          </div>
        </li>
        <li>
          <ButtonLink
            body={t('resume')}
            classes='btn display-md-inline-flex primary-nav'
            link={cvPDF}
          />
        </li>
        {/* <li>
          <button type='button' className='btn btn-flag' onClick={langNavOpen}>
            <img
              className='flag'
              src={locale === 'en-us' ? en : pl}
              alt={localStorage.getItem('language')}
            />
            <span>{localStorage.getItem('language')}</span>
          </button>
        </li> */}
      </ul>
    </nav>
  );
}

export default DesktopNav;
