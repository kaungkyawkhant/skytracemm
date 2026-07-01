import { Layers, MapPin, Shield, Users } from 'lucide-react';
import { SectionHeader } from './SectionHeader.jsx';
import { useSectionReveal } from './useSectionReveal.js';
import styles from '../styles/About.module.css';

const stats = [
  [Shield, 'Safety-First Engineering Culture'],
  [Layers, '4 Integrated Disciplines: MEP + ELV + TSI'],
  [MapPin, 'Nationwide Myanmar Project Reach'],
  [Users, 'Licensed, Multi-Discipline Engineering Team'],
];

const philosophy = [
  ['VISION', "To be Myanmar's most trusted multi-discipline systems integration company for the energy, industrial, and infrastructure sectors, delivering reliable solutions that power sustainable development."],
  ['MISSION', "To engineer, procure, integrate, and commission Mechanical, Electrical, Piping, ELV, and Telecom systems that exceed our clients' technical requirements - safely, on time, and at the highest quality standard."],
  ['VALUES', 'Safety First. Engineering Precision. Client Partnership. Accountability. Environmental Responsibility. Community Investment.'],
];

/**
 * Company profile, credentials, and operating philosophy section.
 * Uses useSectionReveal for trace-line animation.
 */
export function About() {
  const ref = useSectionReveal();

  return (
    <div ref={ref} className={`section-container ${styles.about}`}>
      <div className={styles.grid}>
        <div>
          <SectionHeader title="WHO WE ARE" />
          <div className={styles.copy}>
            <p>Sky Trace Co., Ltd. is a Yangon-based engineering and systems integration company specialising in Mechanical, Electrical, Piping, and Extra Low Voltage (ELV) systems for commercial, industrial, and energy sector clients. Founded on the principle that communication and precision are the foundation of every successful project, we have expanded our capabilities to include end-to-end Telecom System Integration (TSI) for Myanmar&apos;s growing oil & gas industry.</p>
            <p>From design to commissioning, we bring licensed engineering expertise, a disciplined project management approach, and a commitment to completing every engagement to specification, on schedule, and within budget.</p>
            <p>Headquartered at 411, Migathi Street, Ward (12), South Okkalapa Township, Yangon, our teams operate across Myanmar and are positioned to support offshore and onshore energy projects in the region.</p>
          </div>
        </div>
        <div className={styles.statGrid}>
          {stats.map(([Icon, label]) => (
            <article className="card" key={label}>
              <Icon aria-hidden="true" />
              <h3>{label}</h3>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.philosophy}>
        {philosophy.map(([title, text]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
