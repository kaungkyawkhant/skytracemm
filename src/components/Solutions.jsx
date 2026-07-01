import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader.jsx';
import { useSectionReveal } from './useSectionReveal.js';
import styles from '../styles/Solutions.module.css';

const tabs = [
  {
    id: 'mep',
    label: 'MEP Solutions',
    items: [
      ['HVAC & Ventilation', 'Chilled water, AHU, FCU, ducting, pressurisation'],
      ['Power Distribution', 'MV/LV switchgear, transformers, busbar, distribution boards'],
      ['Fire Protection', 'Sprinkler, hydrant, deluge, foam suppression, dry chemical'],
      ['Utilities Piping', 'Compressed air, instrument air, potable water, drainage'],
      ['Earthing & Lightning', 'Earth grid, lightning protection, surge protection'],
      ['Generator & UPS', 'Standby gen-sets, UPS, ATS, battery backup systems'],
    ],
  },
  {
    id: 'elv',
    label: 'ELV Solutions',
    items: [
      ['CCTV & Surveillance', 'IP cameras, NVR/VMS, remote monitoring, PTZ control'],
      ['Access Control', 'Card/biometric, turnstile, integration with CCTV'],
      ['Fire Alarm & Detection', 'Addressable/conventional, voice evacuation, Notifier/Hochiki'],
      ['Public Address (PA)', 'Background music, paging, emergency tone'],
      ['Building Management (BMS)', 'BACnet/Modbus integration, energy monitoring, SCADA-lite'],
      ['Structured Cabling', 'Cat6A/OM4 fibre, data centres, zone distribution frames'],
    ],
  },
  {
    id: 'telecom',
    label: 'Telecom Solutions',
    items: [
      ['IP Network Infrastructure', 'Industrial Ethernet, managed switches, VLAN, QoS'],
      ['VSAT & Satellite', 'C/Ku-band VSAT, hybrid WAN, remote site connectivity'],
      ['PAGA (Oil & Gas)', 'IEC 61892 compliant public address & general alarm'],
      ['Radio Communication', 'VHF/UHF DMR, trunked radio, repeater networks'],
      ['SCADA Radio Networks', 'P25, serial/IP SCADA radio, RTU telemetry, DNP3'],
      ['Cybersecurity', 'Industrial firewall, IEC 62443 zoning, network monitoring'],
      ['Fibre Optic Networks', 'Armoured OSP fibre, splicing, OTDR testing'],
      ['VoIP & IP PABX', 'IP telephony, intrinsically safe handsets, intercoms'],
    ],
  },
];

const SolutionCard = React.memo(function SolutionCard({ item }) {
  return (
    <article className={`card ${styles.card}`}>
      <h3>{item[0]}</h3>
      <p>{item[1]}</p>
    </article>
  );
});

/**
 * Vendor-independent solution tabs driven by local React state.
 * Active tab controls the visible card grid without external libraries.
 */
export function Solutions() {
  const ref = useSectionReveal();
  const [active, setActive] = useState('mep');
  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div ref={ref} className="section-container">
      <SectionHeader title="TECHNICAL SOLUTIONS" align="center">
        Vendor-independent solutions engineered to international standards and tailored to Myanmar&apos;s regulatory and environmental conditions.
      </SectionHeader>
      <div className={styles.tabs} role="tablist" aria-label="Solution categories">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" role="tab" aria-selected={active === tab.id} className={active === tab.id ? styles.active : ''} onClick={() => setActive(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.grid} role="tabpanel">
        {activeTab.items.map((item) => <SolutionCard key={item[0]} item={item} />)}
      </div>
    </div>
  );
}
