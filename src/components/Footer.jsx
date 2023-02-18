function Footer({ t }) {
  return (
    <section className='padding-block-900 fw-bold bg-primary-100  text-primary-800'>
      <footer className='container'>
        <div>{t('footerBody')}</div>
        <div>v1.0.0</div>
      </footer>
    </section>
  );
}

export default Footer;
