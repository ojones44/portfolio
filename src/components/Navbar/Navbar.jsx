// React Imports

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
  languages,
  handleLangChange,
  mobNavOpen,
  langNavOpen,
  isLangNavOpen,
  isMobNavOpen,
  locale,
}) {
  return (
    <header className='nav-wrapper'>
      <OliverLogo />
      <DesktopNav locale={locale} langNavOpen={langNavOpen} />
      {isMobNavOpen && (
        <MobileMenu
          onClick={mobNavOpen}
          langNavOpen={langNavOpen}
          locale={locale}
          handleLangChange={handleLangChange}
        />
      )}
      <MobileNav
        onClick={mobNavOpen}
        isMobNavOpen={isMobNavOpen}
        langNavOpen={langNavOpen}
        locale={locale}
      />
      {isLangNavOpen && (
        <LanguageMenu
          languages={languages}
          handleLangChange={handleLangChange}
          locale={locale}
        />
      )}
    </header>
  );
}

export default Navbar;
