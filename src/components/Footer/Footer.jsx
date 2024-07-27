// CSS Import
import './Footer.css';
import { FaRocket } from 'react-icons/fa';

function Footer({ t }) {
  return (
    <footer className='container padding-block-900 fw-bold bg-primary-100  text-primary-800'>
      <FaRocket onClick={() => window.scrollTo(0, 0)} />
      <div>{t('footerBody')}</div>
    </footer>
  );
}

export default Footer;
