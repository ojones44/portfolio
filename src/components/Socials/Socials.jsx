// component imports
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Socials({ inverted = false }) {
  return (
    <div data-type={inverted ? 'inverted' : ''} className='social-nav'>
      <a
        href='https://github.com/ojones44'
        target='_blank'
        rel='noreferrer'
        className='github'
      >
        <FiGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/oliverj1994'
        target='_blank'
        rel='noreferrer'
        className='linkedin'
      >
        <FaLinkedinIn />
      </a>
      <a
        href='https://twitter.com/oliverj1994'
        target='_blank'
        rel='noreferrer'
        className='twitter'
      >
        <FaXTwitter />
      </a>
    </div>
  );
}
