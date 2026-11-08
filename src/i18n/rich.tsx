import { Fragment, type ReactNode } from 'react';
import { t, type Params } from './index';

type Part = ReactNode | ((inner: string) => ReactNode);

/**
 * For a sentence with something inside it that isn't plain text, because the words around it move between languages:
 *
 *   rich('Saved for <name/>. <link>Change</link>', { name: <b>{n}</b>, link: (s) => <Link to="/x">{s}</Link> })
 */
export function rich(source: string, parts: Record<string, Part>, params?: Params): ReactNode {
  const text = t(source, params);
  const out: ReactNode[] = [];
  const tag = /<(\w+)\/>|<(\w+)>(.*?)<\/\2>/gs;
  let at = 0;
  for (let m = tag.exec(text); m; m = tag.exec(text)) {
    if (m.index > at) out.push(text.slice(at, m.index));
    const part = parts[m[1] ?? m[2]];
    out.push(<Fragment key={m.index}>{typeof part === 'function' ? part(m[3] ?? '') : part}</Fragment>);
    at = m.index + m[0].length;
  }
  if (at < text.length) out.push(text.slice(at));
  return <>{out}</>;
}
