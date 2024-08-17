// CSS Import
import './Footer.css';
import { FaRocket } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
import t from '../../i18n/messages/translate';

function Footer() {
  return (
    <footer className='container bg-primary-100'>
      <FaRocket onClick={() => window.scrollTo(0, 0)} />
      <div className='fc-neutral-600 ff-pop'>{t('footerBody')}</div>
    </footer>
  );
}

export default Footer;
