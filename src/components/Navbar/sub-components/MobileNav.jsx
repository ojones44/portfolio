// Asset Imports
import { HamburgerIcon, CloseIcon } from '../../../svgs/embedded';
import pl from '../../../assets/pl.png';
import en from '../../../assets/uk.png';

function MobileNav({ onClick, isMobNavOpen }) {
  return (
    <button
      type='button'
      className='mobile-nav-toggle'
      aria-controls='primary-nav'
      onClick={onClick}
    >
      {isMobNavOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
}

export default MobileNav;
