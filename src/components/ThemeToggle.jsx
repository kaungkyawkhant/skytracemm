import { Moon, Sun } from 'lucide-react';
import styles from '../styles/ThemeToggle.module.css';

/**
 * Light/dark scheme switch. Props: theme ('dark' | 'light'), onToggle callback.
 */
export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={!isDark}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
}
