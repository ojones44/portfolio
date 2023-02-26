// CSS Imports
import './WelcomeMessage.css';

// Component Imports
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '../Buttons';

const socialsSX = {
  fontSize: 30,
  color: 'black',
  '&:hover': {
    color: 'gray',
  },
};

function WelcomeMessage({ t }) {
  return (
    <section className='landing center-v'>
      <div className='container'>
        <div className='greeting-div'>
          <h3 className='fw-regular fs-small-sub ff-pop'>{t('greet')}</h3>
          <h1 className='fw-bold fs-heading text-primary-800'>Oliver Jones.</h1>
          <p>{`${'.builderOfWebApps()'}`}</p>
          <p>{`${'.writerOfCode()'}`}</p>
          <p>{`${'.userOfGradients()'}`}</p>
          <p className='padding-bottom-500'>{`${'.loverOfMusic()'}`}</p>
          <Button body={t('connectMe')} />
          <div className='social-nav'>
            <a
              href='https://github.com/ojones44'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon sx={socialsSX} />
            </a>
            <a
              href='https://www.linkedin.com/in/oliverj1994'
              target='_blank'
              rel='noreferrer'
              className='social-button'
            >
              <LinkedInIcon sx={socialsSX} />
            </a>
            <a
              href='https://twitter.com/oliverj1994'
              target='_blank'
              rel='noreferrer'
            >
              <TwitterIcon sx={socialsSX} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
