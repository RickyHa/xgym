import {englishMessages} from 'admin-on-rest';
import {vietnameseMessages} from 'aor-language-vietnamese';

import customEnglishMessages from './en';
import customVietnameseMessages from './vi';

export default {
  en: {...englishMessages, ...customEnglishMessages},
  vi: {...vietnameseMessages, ...customVietnameseMessages}
}; // export
