import { useEffect, useRef, useState } from 'react';
import { Avatar } from '../components/ChildSwitcher';
import { ChildForm } from '../components/ChildForm';
import { CountrySheet } from '../components/Help';
import { InstallPrompt } from '../components/InstallPrompt';
import { backUpNow } from '../components/Status';
import { AID_REGIONS } from '../data/packs';
import { Icon } from '../components/Icon';
import { BackButton, Page, Section } from '../components/Page';
import { Sheet } from '../components/Sheet';
import { toast } from '../components/Toast';
import { Glyph, ListGroup, ListRow, Segmented } from '../components/ui';
import { ACTIVITIES } from '../data/activities';
import { SOURCES } from '../data/sources';
import { childAge } from '../lib/age';
import { playReminderCalendar } from '../lib/calendar';
import { countryName, guessCountry } from '../lib/emergency';
import { toISODate } from '../lib/dates';
import { saveBackupFile, storageProtection, type StorageProtection } from '../platform';
import type { BedsideTone, Child, Climate, Theme } from '../store/model';
import { actions, canUndoImport, damagedCopies, damagedCopy, isBackup, removeDamagedCopy, useStore } from '../store/store';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { formatDate, language, localDigits, num, t } from '../i18n';

/** English shows the plain date. Other languages need their own calendar and digits. */
const copyDate = (iso: string) => (language() === 'en' ? iso.slice(0, 10) : formatDate(new Date(iso), { day: 'numeric', month: 'long', year: 'numeric' }));

export default function Settings() {
  const children = useStore((s) => s.children);
  const theme = useStore((s) => s.settings.theme);
  const motion = useStore((s) => s.settings.motion);
  const [editing, setEditing] = useState<Child | 'new' | null>(null);
  const [showSources, setShowSources] = useState(false);
  const [choosingCountry, setChoosingCountry] = useState(false);
  const [rescuable, setRescuable] = useState<string[]>(() => damagedCopies());
  const settings = useStore((s) => s.settings);
  const lastBackupAt = settings.lastBackupAt;
  const [protection, setProtection] = useState<StorageProtection>('unsupported');
  useEffect(() => {
    void storageProtection().then(setProtection);
  }, []);
  const country = settings.country ?? guessCountry();
  const fileRef = useRef<HTMLInputElement>(null);
  // Worked out here rather than in the `value` props below, because the scanner doesn't read inside those.
  const choose = t('Choose');
  const celebrating = settings.celebrations.length ? num(settings.celebrations.length) : t('None');
  const nightScreen = settings.bedside ? t('On') : t('Off');

  const restore = async (file: File) => {
    try {
      const data: unknown = JSON.parse(await file.text());
      if (!isBackup(data)) throw new Error('not a backup');
      if (!actions.importState(data)) throw new Error('not a backup');
      toast(t('✅ Backup restored'), canUndoImport() ? { label: t('Undo'), onClick: () => actions.undoImport() } : undefined);
    } catch {
      toast(t('That file doesn’t look like a PlayNest backup.'));
    }
  };

  return (
    <Page world="sky" title={t('Settings')} back={<BackButton fallback="/" />}>
      <Section title={t('Children')} id="children-title">
        <ListGroup>
          {children.length === 0 && <ListRow title={t('No children added yet')} />}
          {children.map((c) => {
            const age = childAge(c.birthDate, c.weeksEarly);
            return (
              <ListRow
                key={c.id}
                onClick={() => setEditing(c)}
                ariaLabel={t('Edit {name}', { name: c.name })}
                lead={<Avatar child={c} />}
                title={c.name}
                subtitle={age.correctedLabel ? t('{age} · corrected {corrected}', { age: age.label, corrected: age.correctedLabel }) : age.label}
                chevron
              />
            );
          })}
          <ListRow onClick={() => setEditing('new')} lead={<Glyph icon="plus" />} title={t('Add a child')} />
        </ListGroup>
      </Section>

      <InstallPrompt />

      <Section title={t('Language')} id="language-title">
        <LanguageSwitch />
      </Section>

      <Section title={t('Appearance')} id="appearance-title">
        <Segmented<Theme>
          label={t('Theme')}
          value={theme}
          onChange={(t) => actions.setTheme(t)}
          options={[
            { value: 'system', label: t('Auto') },
            { value: 'light', label: t('Light') },
            { value: 'dark', label: t('Dark') },
          ]}
        />
        <p className="field-label settings-sub" id="movement-label">
          {t('Movement')}
        </p>
        <Segmented<'auto' | 'less'>
          label={t('Movement')}
          value={motion}
          onChange={(m) => actions.setSettings({ motion: m })}
          options={[
            { value: 'auto', label: t('Lively') },
            { value: 'less', label: t('Less movement') },
          ]}
        />
        {window.matchMedia('(prefers-reduced-motion: reduce)').matches && <p className="footnote">{t('Your device asks for less movement, so PlayNest keeps still either way.')}</p>}
      </Section>

      <Section title={t('Where you are')} id="where-title">
        <ListGroup>
          <ListRow
            onClick={() => setChoosingCountry(true)}
            lead={<Glyph emoji="🌍" tone="var(--d-senses)" />}
            title={t('Country')}
            subtitle={t('For emergency numbers and helplines')}
            value={country ? countryName(country) : choose}
            chevron
          />
          <ListRow
            to="/help/first-aid"
            lead={<Glyph emoji="🚑" tone="var(--safety)" />}
            title={t('First-aid steps')}
            value={settings.aidRegion ? AID_REGIONS[settings.aidRegion].label : choose}
          />
        </ListGroup>
        <div className="field settings-field">
          <span className="label">{t('Seasons')}</span>
          <Segmented<NonNullable<Climate> | 'unset'>
            label={t('Seasons')}
            value={settings.climate ?? 'unset'}
            onChange={(c) => actions.setSettings({ climate: c === 'unset' ? null : c })}
            options={[
              { value: 'unset', label: t('Off') },
              { value: 'temperate-north', label: t('North') },
              { value: 'temperate-south', label: t('South') },
              { value: 'tropical', label: t('Tropics') },
            ]}
          />
          <p className="footnote">{t('Nudges ideas to suit the time of year. It never looks up where you are.')}</p>
        </div>
      </Section>

      <Section title={t('Celebrations')} id="celebrate-title">
        <ListGroup>
          <ListRow to="/celebrate" lead={<Glyph emoji="🎉" tone="var(--d-feelings)" />} title={t('What you celebrate')} value={celebrating} />
        </ListGroup>
      </Section>

      <Section title={t('A gentle reminder')} id="remind-title">
        <ListGroup>
          <ListRow
            onClick={() => {
              // i18n-ignore: a file name, kept in plain Latin so any calendar app can open it
              const file = new File([playReminderCalendar(new Date())], 'PlayNest-play-time.ics', { type: 'text/calendar' });
              const url = URL.createObjectURL(file);
              const a = Object.assign(document.createElement('a'), { href: url, download: file.name });
              document.body.appendChild(a);
              a.click();
              a.remove();
              setTimeout(() => URL.revokeObjectURL(url), 10_000);
              toast(t('🗓️ Open the file to add it to your calendar'));
            }}
            lead={<Glyph emoji="🗓️" tone="var(--d-hands)" />}
            title={t('Add play time to your calendar')}
            subtitle={t('Three times a week. Change or delete it any time')}
            chevron
          />
        </ListGroup>
        <p className="footnote">{t('PlayNest can’t remind you while it’s closed, and it won’t pretend to. Your calendar can.')}</p>
      </Section>

      <Section title={t('At night')} id="night-title">
        <ListGroup>
          <ListRow
            onClick={() => actions.setSettings({ bedside: !settings.bedside })}
            lead={<Glyph icon="moon" tone="var(--d-selfcontrol)" />}
            title={t('Dim night screen')}
            subtitle={t('Very dark and easier on your eyes. Turn your brightness down too')}
            value={nightScreen}
          />
        </ListGroup>
        {settings.bedside && (
          <div className="field settings-field">
            <span className="label">{t('Colour')}</span>
            <Segmented<BedsideTone>
              label={t('Night screen colour')}
              value={settings.bedsideTone}
              onChange={(t) => actions.setSettings({ bedsideTone: t })}
              options={[
                { value: 'red', label: t('Red') },
                { value: 'amber', label: t('Amber') },
              ]}
            />
          </div>
        )}
      </Section>

      <Section title={t('Your data')} id="data-title">
        <ListGroup>
          <ListRow onClick={() => void backUpNow()} lead={<Glyph icon="download" tone="var(--d-language)" />} title={t('Save a copy')} subtitle={lastBackupAt ? t('Last copy: {date}', { date: copyDate(lastBackupAt) }) : t('Keeps everything safe if you change phones')} chevron />
          <ListRow onClick={() => fileRef.current?.click()} lead={<Glyph icon="upload" tone="var(--d-senses)" />} title={t('Restore from backup')} chevron />
          {rescuable.map((key) => (
            <ListRow
              key={key}
              onClick={() => {
                const text = damagedCopy(key);
                if (!text) return;
                void saveBackupFile(text, `damaged-${toISODate(new Date())}`).then((result) => {
                  if (result === 'shared' || result === 'downloaded') {
                    removeDamagedCopy(key);
                    setRescuable(damagedCopies());
                    toast(t('💾 Copy saved'));
                  }
                });
              }}
              lead={<Glyph icon="download" tone="var(--safety)" />}
              title={t('Save a copy of a damaged save')}
              subtitle={t('It couldn’t be read, so it was kept for you')}
              chevron
            />
          ))}
          <ListRow
            danger
            onClick={() => {
              if (confirm(t('Erase all children, journal entries, milestones and plans from this device? This cannot be undone.'))) {
                actions.resetAll();
                toast(t('All data erased'));
              }
            }}
            lead={<Glyph icon="trash" tone="var(--danger)" />}
            title={t('Erase all data')}
          />
        </ListGroup>
        <p className="footnote">
          <Icon name="lock" size={14} /> {t('No account, no servers, no tracking. Everything stays on this device.')}{' '}
          {protection === 'persisted' ? t('This browser has agreed to keep it.') : t('A copy keeps it safe if this phone is lost or its storage is cleared.')}
        </p>
        <input
          ref={fileRef}
          type="file"
          accept=".txt,.json,text/plain,application/json"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void restore(f);
            e.target.value = '';
          }}
        />
      </Section>

      <Section title={t('About')} id="about-title">
        <ListGroup>
          <ListRow
            onClick={() => setShowSources(true)}
            lead={<Glyph icon="book" tone="var(--d-thinking)" />}
            title={t('Research sources')}
            value={num(Object.keys(SOURCES).length)}
            chevron
          />
          <ListRow lead={<Glyph icon="info" tone="var(--ink-3)" />} title={t('Version')} value={localDigits('1.5')} />
        </ListGroup>
        <p className="footnote">
          {t('{n} games for children from birth to 12. PlayNest offers ideas for play and general information. It is not medical advice. If you have any concern about your child’s development, talk to your doctor.', { n: ACTIVITIES.length })}
        </p>
        <p className="footnote">
          {t('Illustrations: Fluent Emoji by Microsoft (MIT). Fonts: Caprasimo, Nunito, Vazirmatn and Lalezar (SIL Open Font License). Some coding games draw on CS Unplugged (CC BY-SA 4.0). Emergency numbers contain public sector information licensed under the Open Government Licence v3.0.')}
        </p>
      </Section>

      {choosingCountry && <CountrySheet onClose={() => setChoosingCountry(false)} />}

      {showSources && (
        <Sheet title={t('Research sources')} onClose={() => setShowSources(false)}>
          <div className="sources">
            {Object.values(SOURCES).map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noreferrer">
                {s.title} — <span className="muted">{s.publisher}</span>
              </a>
            ))}
          </div>
        </Sheet>
      )}

      {editing && (
        <Sheet title={editing === 'new' ? t('Add a child') : t('Edit {name}', { name: editing.name })} onClose={() => setEditing(null)}>
          {(close) => (
            <>
              <ChildForm
                initial={editing === 'new' ? undefined : editing}
                taken={children.filter((c) => editing === 'new' || c.id !== editing.id)}
                submitLabel={editing === 'new' ? t('Add child') : t('Save')}
                onCancel={close}
                onSubmit={(draft) => {
                  if (editing === 'new') actions.addChild(draft);
                  else actions.updateChild(editing.id, draft);
                  close();
                  toast(t('Saved'));
                }}
              />
              {editing !== 'new' && (
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={() => {
                    if (confirm(t('Remove {name} and everything saved about them: journal, milestones, plans, routines, firsts and stories?', { name: editing.name }))) {
                      actions.removeChild(editing.id);
                      setEditing(null);
                    }
                  }}
                >
                  <Icon name="trash" size={18} /> {t('Remove {name}', { name: editing.name })}
                </button>
              )}
            </>
          )}
        </Sheet>
      )}
    </Page>
  );
}
