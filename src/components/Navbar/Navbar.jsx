// React Imports
import { Link } from 'react-router-dom';

// CSS Imports
import './Navbar.css';

//  Component Imports
import MobileNav from './sub-components/MobileNav';
import MobileMenu from './sub-components/MobileMenu';
import LanguageMenu from './sub-components/LanguageMenu';
import DesktopNav from './sub-components/DesktopNav';

// Asset Imports
import { OliverLogo } from '../../svgs/embedded';

function Navbar({
  t,
  languages,
  langChange,
  mobNavOpen,
  langNavOpen,
  isLangNavOpen,
  isMobNavOpen,
  locale,
}) {
  return (
    <header className='nav-wrapper'>
      <OliverLogo />
      <DesktopNav t={t} locale={locale} langNavOpen={langNavOpen} />
      {isMobNavOpen && <MobileMenu t={t} onClick={mobNavOpen} />}
      <MobileNav
        onClick={mobNavOpen}
        isMobNavOpen={isMobNavOpen}
        langNavOpen={langNavOpen}
        locale={locale}
      />
      {isLangNavOpen && (
        <LanguageMenu
          t={t}
          langs={languages}
          langChange={langChange}
          locale={locale}
        />
      )}
    </header>
  );
}

export default Navbar;
