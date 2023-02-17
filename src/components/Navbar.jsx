// React Imports
import { Link } from 'react-router-dom';

// Asset Imports
import logo from '../assets/oliverj.png';

function Navbar({ t, languages, onChange }) {
  return (
    <header className='heading'>
      <div className='container'>
        <Link to='/'>
          <img src={logo} alt='oj-logo' />
        </Link>
        <nav>
          <ul className='nav-list fs-nav'>
            <li>
              <a href='#'>{t('about1')}</a>
            </li>
            <li>
              <a href='#'>{t('projects2')}</a>
            </li>
            <li>
              <a href='#'>{t('contact3')}</a>
            </li>
          </ul>
        </nav>
        <button type='button' className='button'>
          {t('resume')}
        </button>
        <p>Choose: </p>
        <select onChange={onChange}>
          {languages.map((item) => (
            <option key={item.id} label={item.lang} value={item.locale} />
          ))}
        </select>
      </div>
    </header>
  );
}

export default Navbar;
