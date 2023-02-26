// Component Imports
import { ButtonLink } from '../../Buttons';

// Asset Imports
import pl from '../../../assets/pl.png';
import en from '../../../assets/uk.png';

function DesktopNav({ t, locale, langNavOpen }) {
  return (
    <nav className='primary-nav' id='primary-nav'>
      <ul aria-label='Primary' className='nav-list'>
        <li>
          <a className='underline' href='#about'>
            {t('about1')}
          </a>
        </li>
        <li>
          <a className='underline' href='#projects'>
            {t('projects2')}
          </a>
        </li>
        <li>
          <a className='underline' href='#contact'>
            {t('contact3')}
          </a>
        </li>
        <li>
          <ButtonLink
            body={t('resume')}
            classes='btn display-md-inline-flex primary-nav'
            link='https://novoresume.com/resume-templates'
          />
        </li>
        <li>
          <button type='button' className='btn btn-flag' onClick={langNavOpen}>
            <img
              className='flag'
              src={locale === 'en-us' ? en : pl}
              alt={localStorage.getItem('language')}
            />
            <span>{localStorage.getItem('language')}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
