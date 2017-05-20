import {englishMessages} from 'admin-on-rest';
import vietnameseMessages from './aor-language-vietnamese';

import customEnglishMessages from './en';
import customVietnameseMessages from './vi';

export default {
  vi: {...vietnameseMessages, ...customVietnameseMessages},
  en: {...englishMessages, ...customEnglishMessages}
}; // export
