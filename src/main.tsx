import { initLanguage } from './i18n';
import './styles/app.css';

// The language comes first, so that everything imported after it can be written as if it were already known.
void initLanguage().then(() => import('./start'));
