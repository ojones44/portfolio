import oliImg from '../../assets/Oli.jpg';
import './About.css';

function About({ t }) {
  return (
    <section
      id='about'
      className='container fc-neutral bg-neutral-800 section-height-100vh fs-body padding-block-900 flow'
    >
      <h2 className='sub-heading fs-sub-heading fw-bold'>{t('about1')}</h2>
      <div className='about-layout fc-neutral-200'>
        <div className='about-me-text'>
          <p>
            Hello! I'm Oliver, a Junior Web Developer transitioning from a
            12-year career as a CNC programmer in aerospace engineering. My
            experience in aerospace has equipped me with precision,
            problem-solving skills, and technical expertise.
          </p>
          <p>
            My interest in software development grew as I began using coding to
            enhance my work in CNC programming. This curiosity led me to fully
            immerse myself in learning web development, where I’ve applied my
            analytical mindset and attention to detail to mastering various
            programming languages and frameworks.
          </p>
          <p>
            I am now eager to bring my dedication and problem-solving abilities
            to the software development field. Thank you for visiting my
            portfolio. I look forward to connecting and exploring new
            opportunities in this exciting industry.
          </p>
        </div>

        <img className='portrait' src={oliImg} alt='oli-img' />
      </div>
    </section>
  );
}

export default About;
