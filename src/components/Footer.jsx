import { Facebook } from 'lucide-react';
import styles from '../styles/Footer.module.css';

const links = [
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
 * Site footer with company tagline, quick links, and discipline summary.
 * Props: onNavigate smooth-scroll callback.
 */
export function Footer({ onNavigate }) {
  return (
    <footer className={styles.footer}>
      <div className={`section-container ${styles.grid}`}>
        <div>
          <button className={styles.wordmark} type="button" onClick={() => onNavigate('home')}>
            <img src="/skytraceicon.webp" alt="" width="36" height="36" className={styles.logo} />
            SKY <span>TRACE</span> CO., LTD.
          </button>
          <p>From Start to Finish - We Get the Job Done.</p>
          <a href="https://facebook.com/skytracemm" aria-label="Sky Trace Facebook"><Facebook aria-hidden="true" /></a>
        </div>
        <div>
          <h3>Quick Links</h3>
          {links.map(([id, label]) => <button key={id} type="button" onClick={() => onNavigate(id)}>{label}</button>)}
        </div>
        <div>
          <h3>Disciplines & Standards</h3>
          <p>Mechanical, Electrical, Piping Systems</p>
          <p>ELV System Integration</p>
          <p>Telecom System Integration (TSI)</p>
          <p>IEC 60079 | IEC 61892 | IEC 62443</p>
        </div>
      </div>
      <div className={styles.bottom}>© 2025 Sky Trace Co., Ltd. All rights reserved. | Yangon, Myanmar</div>
    </footer>
  );
}
