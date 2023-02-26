import LOCALES from './locales';
import pl from '../assets/pl.png';
import en from '../assets/uk.png';

const languages = [
  {
    id: 1,
    lang: 'English',
    locale: LOCALES.ENGLISH,
    img: en,
  },
  {
    id: 2,
    lang: 'Polski',
    locale: LOCALES.POLISH,
    img: pl,
  },
];

export default languages;
