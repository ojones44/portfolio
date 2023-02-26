import oliImg from '../../assets/Oli.jpg';

function About({ t }) {
  return (
    <section className='fs-body padding-block-900 flow'>
      <div className='container'>
        <h1 className='fs-sub-heading fw-bold'>{t('about1')}</h1>
        <div className='even-columns'>
          <div>
            <p>{t('aboutMe')}</p>
          </div>
          <div>
            <img className='portrait' src={oliImg} alt='oli-img' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
