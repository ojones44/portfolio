import { FaReact, FaCss3Alt, FaHtml5, FaNode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiStyledcomponents,
} from 'react-icons/si';
import PythonLogo from '../assets/python-logo.svg';

function FaPython() {
  return <img src={PythonLogo} alt='python' />;
}

const languageMap = {
  html: <FaHtml5 color='#e34c26' />,
  css: <FaCss3Alt color='#264de4' />,
  javascript: <IoLogoJavascript color='#f7df1e' />,
  react: <FaReact color='#61dbfb' />,
  node: <FaNode color='#44883e' />,
  python: <FaPython />,
  express: <SiExpress color='#fff' />,
  typescript: <SiTypescript color='#3178c6' />,
  mongodb: <SiMongodb color='#4db33d' />,
  styledcomponents: <small>{'<💅🏻>'}</small>,
};

const projects = [
  {
    // Flipacoin
    id: 5,
    name: 'projectName6',
    description: 'projectDesc6',
    projectId: 'flipacoin',
    languages: [
      languageMap.react,
      languageMap.styledcomponents,
      languageMap.javascript,
      languageMap.express,
      languageMap.mongodb,
    ],
    repo: 'https://github.com/ojones44/flipacoin-finance-tracker',
    demo: '',
  },
  {
    // Blog
    id: 6,
    name: 'projectName7',
    description: 'projectDesc7',
    projectId: 'blog',
    languages: [
      languageMap.react,
      languageMap.styledcomponents,
      languageMap.typescript,
      languageMap.express,
      languageMap.mongodb,
    ],
    repo: 'https://github.com/ojones44/oj-blog',
    demo: '',
  },
  {
    // Space invaders
    id: 7,
    name: 'projectName8',
    description: 'projectDesc8',
    projectId: 'space-invaders',
    languages: [languageMap.python],
    repo: 'https://github.com/ojones44/space_invaders',
    demo: 'https://ojones44.github.io/space_invaders/',
  },
  {
    // Password Generator
    id: 0,
    name: 'projectName1',
    description: 'projectDesc1',
    projectId: 'password',
    languages: [languageMap.html, languageMap.css, languageMap.javascript],
    repo: 'https://github.com/ojones44/password-generator',
    demo: 'https://oliverj-password-gen.netlify.app/',
  },
  {
    // Calculator
    id: 1,
    name: 'projectName2',
    description: 'projectDesc2',
    projectId: 'calculator',
    languages: [languageMap.react, languageMap.javascript, languageMap.css],
    repo: 'https://github.com/ojones44/react-calculator',
    demo: 'https://oj-react-calculator.netlify.app/',
  },
  {
    // Currency Converter
    id: 2,
    name: 'projectName3',
    description: 'projectDesc3',
    projectId: 'currency',
    languages: [languageMap.html, languageMap.css, languageMap.javascript],
    repo: 'https://github.com/ojones44/currency-converter',
    demo: 'https://w95-currency-converter.netlify.app/',
  },
  {
    // Fletnix (a Netflix clone)
    id: 3,
    name: 'projectName4',
    description: 'projectDesc4',
    projectId: 'fletnix',
    languages: [
      languageMap.react,
      languageMap.styledcomponents,
      languageMap.javascript,
    ],
    repo: 'https://github.com/ojones44/netflix-clone',
    demo: 'https://fletnix-fletnify.netlify.app/',
  },
  {
    // Tic Tac Toe
    id: 4,
    name: 'projectName5',
    description: 'projectDesc5',
    projectId: 'tic-tac-toe',
    languages: [languageMap.react, languageMap.css, languageMap.javascript],
    repo: 'https://github.com/ojones44/tic-tac-toe',
    demo: '',
  },
];

export default projects;
