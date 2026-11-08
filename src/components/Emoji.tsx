import { Fragment } from 'react';

const BASE = import.meta.env.BASE_URL;

/** The artwork's file name: lower-case code points, without the variation selector. See scripts/make-emoji.mjs. */
export function emojiFile(emoji: string): string {
  return [...emoji]
    .map((c) => c.codePointAt(0)!.toString(16))
    .filter((h) => h !== 'fe0f')
    .join('-');
}

export const emojiSrc = (emoji: string) => `${BASE}emoji/${emojiFile(emoji)}.svg`;

/** A bundled illustration for an emoji, so art looks the same on every device and works offline. */
export function Emoji({
  e,
  size,
  className,
  eager = false,
}: {
  e: string;
  /** Pixels. Leave out to size it from CSS. */
  size?: number;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={`emoji${className ? ` ${className}` : ''}`}
      src={emojiSrc(e)}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      data-emoji={e}
      draggable={false}
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
    />
  );
}

const EMOJI = /(\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}|\p{Emoji_Modifier})*)/gu;

/** Plain text with any emoji in it swapped for the bundled artwork. Screen readers just get the words. */
export function EmojiText({ text, size = 18 }: { text: string; size?: number }) {
  return (
    <>
      {text.split(EMOJI).map((part, i) =>
        i % 2 === 1 ? <Emoji key={i} e={part} size={size} className="inline" eager /> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}
