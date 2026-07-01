import { Layers, MapPin, ShieldCheck, Signal } from 'lucide-react';
import { SectionHeader } from './SectionHeader.jsx';
import { useSectionReveal } from './useSectionReveal.js';
import styles from '../styles/TSICapabilities.module.css';

const highlights = [
  [Signal, 'SINGLE SOURCE', 'One contractor for all systems eliminates coordination risk'],
  [ShieldCheck, 'HAZARDOUS AREA', 'Zone 1/2 rated system design'],
  [Layers, 'MEP + ELV + TSI', 'Only firm in Myanmar combining all four disciplines'],
  [MapPin, 'MYANMAR LOCAL', 'Yangon-based team with regional O&G experience'],
];

const stages = [
  ['01', 'FEED & BASIC ENGINEERING', 'Telecom philosophy, system architecture, HSE case inputs, ITT packages.', 'Telecom Design Basis, Block Diagrams, CAPEX estimates.'],
  ['02', 'DETAIL ENGINEERING', 'Single-line diagrams, equipment schedules, cable block diagrams, equipment layout, installation drawings, I/O lists, cause & effect.', null],
  ['03', 'PROCUREMENT', 'Vendor-neutral sourcing of hazardous-area certified telecom equipment.', 'FAT witnessing, third-party inspection, logistics to site.'],
  ['04', 'INTEGRATION & TESTING', 'System integration testing (SIT) in Yangon workshop.', 'Factory Acceptance Test (FAT), PAGA zone testing, IP network commissioning.'],
  ['05', 'INSTALLATION & COMMISSIONING', 'Field installation supervision, SAT, punch list closure, as-built drawings, O&M documentation, operator and maintainer training.', null],
];

const systems = [
  ['PAGA & Emergency Comms', 'IEC 61892, API RP 505', 'Zone 1/2 speakers, amplifiers, zoning, emergency tone'],
  ['IP & Industrial Ethernet', 'IEC 61158, ISA-95', 'Ruggedised switches, VLAN, QoS, OT/IT separation'],
  ['Radio (VHF/UHF/DMR)', 'ETSI TR 102 490', 'Portable, mobile, repeater, trunked dispatch'],
  ['VSAT & Remote WAN', 'ITU-T, FCC Part 25', 'C/Ku-band, beam-switching, hybrid LTE/satellite'],
  ['SCADA Comms', 'DNP3, IEC 60870-5', 'RTU telemetry radio, Modbus TCP, OPC-UA gateways'],
  ['Fibre Optic Backbone', 'IEC 60793, ITU-T G.652', 'Armoured OSP, FTB, OTDR, fusion splicing'],
  ['IP CCTV (Ex-rated)', 'IEC 60079, ATEX', 'Ex-proof cameras, video analytics, remote monitoring'],
  ['Cybersecurity', 'IEC 62443, NIST CSF', 'Industrial DMZ, firewall zoning, patch management'],
  ['GMDSS (Offshore)', 'SOLAS Ch.IV, ITU', 'VHF DSC, EPIRB, SART, MF/HF, Inmarsat-C'],
];

/**
 * Premium TSI section with highlights, lifecycle timeline, and system portfolio.
 * Uses scroll reveal for the trace-line and premium gradient band.
 */
export function TSICapabilities() {
  const ref = useSectionReveal();

  return (
    <div ref={ref} className={`${styles.tsi} section-container`}>
      <SectionHeader eyebrow="NEW CAPABILITY" title={<>TELECOM SYSTEM INTEGRATION<br />FOR OIL & GAS</>} align="center">
        Sky Trace has expanded beyond MEP and ELV to deliver end-to-end Telecom System Integration (TSI) for Myanmar&apos;s upstream, midstream, and offshore energy sector. We bring the same engineering discipline and accountability that defines our MEP/ELV work to every telecom and communications project.
      </SectionHeader>
      <div className={styles.highlights}>
        {highlights.map(([Icon, title, text]) => (
          <article className={styles.highlight} key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className={styles.timeline}>
        {stages.map(([number, title, text, deliverables]) => (
          <article className={styles.stage} key={number}>
            <span>Stage {number}</span>
            <div className={styles.node}>{number}</div>
            <div className="card">
              <h3>{title}</h3>
              <p>{text}</p>
              {deliverables ? <p><strong>Deliverables:</strong> {deliverables}</p> : null}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.portfolio}>
        {systems.map(([system, standards, scope]) => (
          <article className="card" key={system}>
            <h3>{system}</h3>
            <span>{standards}</span>
            <p>{scope}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
