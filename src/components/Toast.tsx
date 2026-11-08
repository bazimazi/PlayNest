import { useEffect, useState } from 'react';
import { EmojiText } from './Emoji';

interface ToastAction {
  label: string;
  onClick: () => void;
}
interface ToastMsg {
  text: string;
  action?: ToastAction;
}
interface Shown extends ToastMsg {
  /** A new toast is a new element, so it comes in properly even when it replaces one still showing. */
  id: number;
  leaving?: boolean;
}

type Listener = (msg: ToastMsg) => void;
const listeners = new Set<Listener>();

/** How long a toast takes to go (ms); keep in sync with `.toast.leaving` in app.css. */
const LEAVE_MS = 200;

/** Show a short confirmation at the bottom of the screen, optionally with one action (e.g. Undo). */
export function toast(text: string, action?: ToastAction) {
  listeners.forEach((l) => l({ text, action }));
}

export function ToastHost() {
  const [msg, setMsg] = useState<Shown | null>(null);
  const [dismiss, setDismiss] = useState<() => void>(() => () => undefined);

  useEffect(() => {
    let timer: number | undefined;
    let gone: number | undefined;
    let seq = 0;
    const away = () => {
      window.clearTimeout(timer);
      setMsg((m) => (m ? { ...m, leaving: true } : m));
      gone = window.setTimeout(() => setMsg(null), LEAVE_MS);
    };
    const l: Listener = (m) => {
      window.clearTimeout(timer);
      window.clearTimeout(gone);
      setMsg({ ...m, id: ++seq });
      // Tired people miss things. An Undo has to wait for them.
      timer = window.setTimeout(away, m.action ? 10000 : 2600);
    };
    listeners.add(l);
    setDismiss(() => away);
    return () => {
      listeners.delete(l);
      window.clearTimeout(timer);
      window.clearTimeout(gone);
    };
  }, []);

  return (
    <div aria-live="polite" role="status">
      {msg && (
        <div key={msg.id} className={`toast${msg.leaving ? ' leaving' : ''}`}>
          <span className="toast-text"><EmojiText text={msg.text} size={20} /></span>
          {msg.action && (
            <button
              type="button"
              className="toast-action"
              onClick={() => {
                msg.action!.onClick();
                dismiss();
              }}
            >
              {msg.action.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
