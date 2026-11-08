import { Segmented } from './ui';
import { language, LANGUAGES, t, type Language } from '../i18n';
import { actions, flushState } from '../store/store';

const CODES = Object.keys(LANGUAGES) as Language[];

/** The app reloads to change language, so everything is rebuilt in the new one. It stays on the same screen. */
export function chooseLanguage(next: Language) {
  if (next === language()) return;
  actions.setSettings({ language: next });
  flushState();
  location.reload();
}

/**
 * Each language is named in itself, so a parent can find theirs whichever one the app is showing. In Settings it sits
 * among the other choices and looks like them; on the welcome screen it's a quiet pair of words above the title.
 */
export function LanguageSwitch({ quiet = false }: { quiet?: boolean }) {
  if (!quiet) {
    return (
      <Segmented<Language>
        label={t('Language')}
        value={language()}
        onChange={chooseLanguage}
        options={CODES.map((code) => ({ value: code, label: <span lang={code}>{LANGUAGES[code].name}</span> }))}
      />
    );
  }
  return (
    <div className="language-switch" role="group" aria-label={t('Language')}>
      {CODES.map((code) => (
        <button key={code} type="button" lang={code} aria-pressed={code === language()} onClick={() => chooseLanguage(code)}>
          {LANGUAGES[code].name}
        </button>
      ))}
    </div>
  );
}
