// Asset Imports
import { HamburgerIcon, CloseIcon } from '../../../svgs/embedded';
import pl from '../../../assets/pl.png';
import en from '../../../assets/uk.png';

function MobileNav({ onClick, isMobNavOpen, langNavOpen, locale }) {
  return (
    <>
      <button
        type='button'
        className='mobile-nav-toggle'
        aria-controls='primary-nav'
        onClick={onClick}
      >
        {isMobNavOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      {/* <button type='button' className='btn-flag-mob' onClick={langNavOpen}>
        <img
          className='flag-mob'
          src={locale === 'en-us' ? en : pl}
          alt={localStorage.getItem('language')}
        />
      </button> */}
    </>
  );
}

export default MobileNav;
