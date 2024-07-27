// Component Imports
import { ButtonLink } from '../../Buttons';

// Asset Imports
import cvPDF from '../../../assets/oliverj_cv.pdf';

function MobileMenu({ t, onClick }) {
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
            <ButtonLink body={t('resume')} classes='btn' link={cvPDF} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
