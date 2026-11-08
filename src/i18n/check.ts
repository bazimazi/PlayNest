import { asciiDigits } from './index';

/** Numbers in a string, whatever digits it uses: "1,000" and "۱٬۰۰۰" are the same. `1/2` and `2–3` count as two each. */
export function numbersIn(s: string): string[] {
  const plain = asciiDigits(s).replace(/٫/g, '.').replace(/(\d)[,٬](\d{3})/g, '$1$2');
  return (plain.match(/\d+(?:\.\d+)?/g) ?? []).sort();
}

const placeholders = (s: string) => (s.match(/\{\w+\}|<\/?\w+\/?>/g) ?? []).sort().join(' ');

/**
 * What could be wrong with one Persian string, judged against its English. These don't judge the translation; they catch
 * the mistakes a person skimming wouldn't, the worst being a changed number on a first-aid card.
 */
export function problemsWithPersian(english: string, persian: string): string[] {
  const out: string[] = [];
  if (!persian.trim()) return ['is empty'];
  if (!/[؀-ۿ]/.test(persian)) out.push('has no Persian in it');
  if (/[يكى]/.test(persian)) out.push('uses Arabic ي ك or ى, not Persian ی and ک');
  if (/[٠-٩]/.test(persian)) out.push('uses Arabic digits, not Persian ones');
  // A web address is the exception: it only works as written.
  if (/\d/.test(persian.replace(/[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}/gi, ''))) out.push('uses Latin digits, not Persian ones');
  const theirs = numbersIn(persian);
  const mine = numbersIn(english);
  const lost = mine.filter((n) => theirs.filter((x) => x === n).length < mine.filter((x) => x === n).length);
  if (lost.length) out.push(`lost or changed the number(s) ${[...new Set(lost)].join(', ')}`);
  if (placeholders(english) !== placeholders(persian)) out.push(`placeholders differ: "${placeholders(english)}" and "${placeholders(persian)}"`);
  // A paragraph takes its direction from its first strong letter, so a Latin first word would flip the whole line.
  // A placeholder isn't a word: a name in it is isolated, and a number has no direction of its own.
  const words = persian.replace(/\{\w+\}|<\/?\w+\/?>/g, '');
  if (/^[\s\p{P}\p{S}\d]*[A-Za-z]/u.test(words)) out.push('starts with a Latin word, which turns the whole line left-to-right');
  return out;
}
