import { ChevronDown } from 'lucide-react';
import { TraceLine } from './TraceLine.jsx';
import styles from '../styles/Hero.module.css';

/**
 * First viewport brand statement with CSS-generated grid, glow, scan lines, CTAs, and stats.
 * Props: onNavigate smooth-scroll callback.
 */
export function Hero({ onNavigate }) {
  return (
    <div className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.scan} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.badge}>YANGON, MYANMAR · EST. 2020</p>
        <h1>
          ENGINEERING SYSTEMS
          <span>BUILT FOR MYANMAR&apos;S</span>
          <em>ENERGY FRONTIER</em>
        </h1>
        <TraceLine />
        <p className={styles.sub}>
          Sky Trace Co., Ltd. delivers integrated Mechanical, Electrical, Piping, ELV, and Telecom Systems for oil & gas,
          industrial, and infrastructure projects across Myanmar and Southeast Asia. From start to finish - we get the job done.
        </p>
        <div className={styles.actions}>
          <button className="btn-primary" type="button" onClick={() => onNavigate('services')}>Explore Our Services →</button>
          <button className="btn-outline" type="button" onClick={() => onNavigate('tsi')}>TSI Capabilities</button>
        </div>
        <div className={styles.stats} aria-label="Company highlights">
          <span><strong>4</strong> Core Disciplines</span>
          <span><strong>Oil & Gas</strong> Ready</span>
          <span><strong>Yangon</strong>-Based</span>
          <span><strong>Nationwide</strong> Reach</span>
        </div>
      </div>
      <button className={styles.scrollCue} type="button" onClick={() => onNavigate('about')} aria-label="Scroll to about">
        <ChevronDown aria-hidden="true" />
        <ChevronDown aria-hidden="true" />
      </button>
    </div>
  );
}
