function WelcomeMessage({ t }) {
  return (
    <section>
      <div className='container padding-block-900'>
        <div>
          <h3 className='fw-regular fs-small-sub ff-pop text-accent-400'>
            {t('greet')}
          </h3>

          <h1 className='fw-bold fs-heading'>Oliver Jones.</h1>
          <h1 className='text-primary-800 fw-regular sub-heading'>
            {t('jobRole')}
          </h1>
          <h2>{t('loveGradients')}</h2>

          <button type='button' className='button'>
            {t('connectMe')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
