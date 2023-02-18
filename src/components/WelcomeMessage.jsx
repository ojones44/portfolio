import Button from './Button';
import { GitHubLogo, LinkedInLogo, TwitterLogo } from '../svgs/embedded';

function WelcomeMessage({ t }) {
  return (
    <section className='greeting text-primary-800'>
      <div className='container'>
        <div className='greeting-div width-fit'>
          <h3 className='fw-regular fs-small-sub ff-pop'>{t('greet')}</h3>

          <h1 className='fw-bold fs-heading text-primary-800'>Oliver Jones.</h1>
          <h1 className='fw-bold text-neutral-600 sub-heading'>
            {`${'.builderOfWebApps()'}`}
          </h1>
          <h1 className='fw-bold text-neutral-600 sub-heading'>
            {`${'.writerOfCode()'}`}
          </h1>
          <h1 className='fw-bold text-neutral-600 sub-heading'>
            {`${'.userOfGradients()'}`}
          </h1>
          <h1 className='padding-bottom-500 fw-bold text-neutral-600 sub-heading'>
            {`${'.loverOfMusic()'}`}
          </h1>

          <Button text={t('connectMe')} classes='button' />

          {/* <a
            href='https://github.com/ojones44'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubLogo />
          </a> */}
          {/* <a
            href='https://twitter.com/oliverj1994'
            target='_blank'
            rel='noreferrer'
          >
            <TwitterLogo />
          </a>
          <a
            href='https://www.linkedin.com/in/oliverj1994'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInLogo />
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
