import './Connect.css';
import { ButtonLink } from '../Buttons';

function Connect({ t }) {
  return (
    <section
      id='connect'
      className='container fc-neutral bg-neutral-800 section-height-100dvh padding-block-900 connect'
    >
      <h3 className='fs-small-sub ff-pop'>{t('contact3')}</h3>
      <h2 className='fw-bold'>{t('contactTitle')}</h2>
      <p className='fc-neutral-200'>{t('contactBody')}</p>

      <ButtonLink
        body={t('connectMe')}
        link='mailto:oliverjjones1994@gmail.com'
        inverted
      />
    </section>
  );
}

export default Connect;
