import { Anchor, Building, Flame, GitBranch, Pickaxe } from 'lucide-react';
import { SectionHeader } from './SectionHeader.jsx';
import { useSectionReveal } from './useSectionReveal.js';
import styles from '../styles/Markets.module.css';

const markets = [
  [Pickaxe, 'Upstream Oil & Gas', 'Wellpad and production facilities across central Myanmar and offshore blocks in the Andaman Sea and Bay of Bengal. Full MEP + TSI integration from greenfield to brownfield.', ['MEP', 'ELV', 'TSI']],
  [GitBranch, 'Midstream & Pipeline', "SCADA radio telemetry and RTU connectivity for Myanmar's natural gas pipeline network, including trunk lines from producing fields to power plants and export terminals.", ['TSI', 'SCADA', 'Piping']],
  [Anchor, 'Offshore & Marine', 'Floating production units, drillships, and platform topsides. GMDSS-compliant telecom, PAGA, Ex-rated CCTV, and IP networking for offshore Myanmar operations.', ['TSI', 'ELV', 'Marine']],
  [Flame, 'Gas Processing & Petrochemical', "Zone 1/2 rated electrical and telecom systems for gas compression, processing, and LNG fractionation facilities in Myanmar's energy value chain.", ['Electrical', 'TSI', 'ELV']],
  [Building, 'Industrial & Commercial', 'Manufacturing, logistics, data centres, hotels, and infrastructure developments across Yangon and major Myanmar cities requiring integrated MEP and ELV solutions.', ['MEP', 'ELV', 'BMS']],
];

/**
 * Market focus section with numbered cards and discipline tags.
 * Uses useSectionReveal for trace-line animation.
 */
export function Markets() {
  const ref = useSectionReveal();

  return (
    <div ref={ref} className={`section-container ${styles.markets}`}>
      <div className={styles.heading}>
        <SectionHeader title="MARKETS WE SERVE">
          Delivering integrated engineering solutions across Myanmar&apos;s energy sector and industrial landscape.
        </SectionHeader>
      </div>
      <div className={styles.grid}>
        {markets.map(([Icon, title, text, tags], index) => (
          <article className={`card ${styles.card}`} key={title}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
            <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
