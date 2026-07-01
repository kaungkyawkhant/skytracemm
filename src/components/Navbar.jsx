import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle.jsx';
import styles from '../styles/Navbar.module.css';

const NAV_ITEMS = [
  ['home', 'Home'],
  ['about', 'About'],
  ['services', 'Services'],
  ['solutions', 'Solutions'],
  ['tsi', 'TSI Capabilities'],
  ['markets', 'Markets'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

/**
 * Fixed navigation with active-section state, scroll blur, and mobile drawer.
 * Props: scrolled, activeSection, onNavigate, menuOpen, onMenuToggle, theme, onThemeToggle.
 */
export function Navbar({ scrolled, activeSection, onNavigate, menuOpen, onMenuToggle, theme, onThemeToggle }) {
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Primary navigation">
      <button className={styles.wordmark} type="button" onClick={() => onNavigate('home')} aria-label="Go to home">
        <img src="/skytraceicon.webp" alt="Sky Trace Co., Ltd. logo" className={styles.logo} width="40" height="40" />
        <span className={styles.wordmarkText}>
          <span><strong>SKY</strong><b>TRACE</b></span>
          <small>CO., LTD.</small>
        </span>
      </button>

      <div className={styles.links}>
        {NAV_ITEMS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
        <button type="button" className={styles.cta} onClick={() => onNavigate('contact')}>
          Contact Us
        </button>
      </div>

      <div className={styles.actions}>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <button className={styles.menuButton} type="button" onClick={onMenuToggle} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-hidden={!menuOpen}>
        {NAV_ITEMS.map(([id, label]) => (
          <button key={id} type="button" className={activeSection === id ? styles.drawerActive : ''} onClick={() => onNavigate(id)}>
            {label}
          </button>
        ))}
        <button type="button" className={styles.drawerCta} onClick={() => onNavigate('contact')}>
          Contact Us
        </button>
      </div>
    </nav>
  );
}
