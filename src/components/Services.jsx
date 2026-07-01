import React from 'react';
import { CheckSquare, ClipboardList, Cpu, GitMerge, Network, PackageSearch, Wrench, Zap } from 'lucide-react';
import { SectionHeader } from './SectionHeader.jsx';
import { useSectionReveal } from './useSectionReveal.js';
import styles from '../styles/Services.module.css';

const services = [
  [Wrench, 'MECHANICAL', 'Mechanical Systems', 'Design and installation of HVAC, chilled water, ventilation, and mechanical plant for industrial, commercial, and offshore facilities. BS/ASHRAE standard compliant.'],
  [Zap, 'ELECTRICAL', 'Electrical Systems', 'MV/LV power distribution, switchgear, UPS, lighting, earthing, and power factor correction. Designed to IEC 60364 and Myanmar Electricity Law standards.'],
  [GitMerge, 'PIPING', 'Piping Systems', 'Process, utility, and fire protection piping systems. Fabrication, installation, pressure testing, and commissioning for industrial and energy environments.'],
  [Cpu, 'ELV', 'ELV Systems', 'Structured cabling, CCTV, access control, fire alarm, public address, BMS, and building security - integrated as a single coherent ELV package.'],
  [Network, 'TSI', 'Telecom System Integration', 'End-to-end integration of IP networks, radio, VSAT, PAGA, SCADA comms, and cybersecurity for oil & gas and industrial sites. Our newest and fastest-growing capability.'],
  [ClipboardList, 'PM', 'Project Management', 'Licensed Project Managers running schedule control, progress reporting, risk management, and multi-discipline coordination from FEED through handover.'],
  [PackageSearch, 'PROCUREMENT', 'Procurement & Expediting', 'Vendor-neutral sourcing of MEP, ELV, and telecom equipment. Factory acceptance testing, inspection, logistics, and customs clearance for Myanmar import.'],
  [CheckSquare, 'COMMISSIONING', 'Commissioning & Handover', 'Pre-commissioning, commissioning, and systematic handover for all disciplines. Punch-list management, as-built documentation, and operator training.'],
];

const ServiceCard = React.memo(function ServiceCard({ item }) {
  const [Icon, badge, title, description] = item;
  return (
    <article className={`card ${styles.card}`}>
      <Icon aria-hidden="true" />
      <span>{badge}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
});

/**
 * Services grid covering MEP, ELV, TSI, procurement, PM, and commissioning.
 * Uses memoized cards because the grid is static.
 */
export function Services() {
  const ref = useSectionReveal();

  return (
    <div ref={ref} className="section-container">
      <SectionHeader title="OUR SERVICES" align="center">
        Four integrated engineering disciplines - delivered by a single, accountable team from concept through commissioning.
      </SectionHeader>
      <div className={styles.grid}>
        {services.map((item) => <ServiceCard key={item[2]} item={item} />)}
      </div>
    </div>
  );
}
