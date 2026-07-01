import { SectionHeader } from './SectionHeader.jsx';
import { useSectionReveal } from './useSectionReveal.js';
import styles from '../styles/Projects.module.css';

const projects = [
  ['OIL & GAS', 'Wellpad Electrical & ELV Package', 'Magway Region, Central Myanmar', 'MV/LV distribution, CCTV, PA, structured cabling for 4 wellpads', ['Electrical', 'ELV']],
  ['TELECOM', 'Onshore Pipeline SCADA Radio Link', 'Mandalay-Yangon Corridor', 'P25 trunked radio + IP microwave backbone, 6 repeater sites', ['TSI', 'Radio']],
  ['COMMERCIAL', 'Mixed-Use Tower - MEP & ELV', 'Yangon CBD', 'HVAC, electrical, fire alarm, access control, structured cabling, BMS', ['MEP', 'ELV']],
  ['OFFSHORE', 'Platform Topside ELV Upgrade', 'Gulf of Martaban', 'Ex-rated CCTV replacement, PAGA amplifier upgrade, IP PABX', ['ELV', 'TSI']],
  ['INDUSTRIAL', 'Manufacturing Facility - MEP', 'Thilawa SEZ, Yangon', 'Chilled water, power distribution, fire suppression, earthing', ['MEP']],
  ['OIL & GAS', 'Remote Site VSAT Connectivity', 'Rakhine Offshore Block', 'VSAT terminal installation, LAN, CCTV, PAGA for 3 remote sites', ['TSI', 'ELV']],
];

/**
 * Representative project reference cards with confidentiality disclaimer.
 * Uses useSectionReveal for trace-line animation.
 */
export function Projects() {
  const ref = useSectionReveal();

  return (
    <div ref={ref} className="section-container">
      <SectionHeader title="PROJECT REFERENCES" align="center">
        A growing track record of multi-discipline engineering delivery across Myanmar&apos;s commercial and energy sectors.
      </SectionHeader>
      <img
        src="/projects.webp"
        alt="Sky Trace field team and site work across plumbing, ACMV, and electrical disciplines"
        className={styles.banner}
        loading="lazy"
        width="1250"
        height="1000"
      />
      <div className={styles.grid}>
        {projects.map(([sector, name, location, scope, tags]) => (
          <article className={`card ${styles.card}`} key={name}>
            <span>{sector}</span>
            <h3>{name}</h3>
            <small>{location}</small>
            <p>{scope}</p>
            <div>{tags.map((tag) => <em key={tag}>{tag}</em>)}</div>
          </article>
        ))}
      </div>
      <p className={styles.disclaimer}>* Project names are representative. Specific client and operator names are subject to confidentiality agreements.</p>
    </div>
  );
}
