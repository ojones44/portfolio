import oliImg from '../assets/Oli.jpg';

function About({ t }) {
  return (
    <section className='padding-block-900'>
      <div className='container'>
        <div>
          <h1>{t('about1')}</h1>
          <div className='even-columns'>
            <div>
              <p>{t('aboutMe')}</p>
            </div>
            <div>
              <img className='portrait' src={oliImg} alt='oli-img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
