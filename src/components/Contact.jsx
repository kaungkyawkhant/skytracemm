import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { SectionHeader } from './SectionHeader.jsx';
import { useSectionReveal } from './useSectionReveal.js';
import styles from '../styles/Contact.module.css';

const endpoint = import.meta.env.VITE_FORM_ENDPOINT || '#'; // TODO: Set VITE_FORM_ENDPOINT in Cloudflare Pages env vars.

const contacts = [
  [MapPin, 'Head Office', <>411, Migathi Street, Ward (12)<br />South Okkalapa Township<br />Yangon, Myanmar</>],
  [Phone, 'Phone', '+95 9 966 660 910'],
  [Phone, 'Alt Phone', '+95 9 979 625 292'],
  [Mail, 'Email', 'sales@skytracemm.com'],
  [Facebook, 'Facebook', 'facebook.com/skytracemm'],
  [Clock, 'Hours', 'Mon-Fri: 09:00-17:30 MMT (UTC+6:30)'],
];

/**
 * Contact information and enquiry form.
 * Form posts to VITE_FORM_ENDPOINT with an inert '#' fallback.
 */
export function Contact() {
  const ref = useSectionReveal();

  return (
    <div ref={ref} className={`section-container ${styles.contact}`}>
      <div>
        <SectionHeader title="GET IN TOUCH" />
        <div className={styles.list}>
          {contacts.map(([Icon, label, value]) => (
            <div className={styles.item} key={label}>
              <Icon aria-hidden="true" />
              <div>
                <strong>{label}</strong>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.note}>For project enquiries, RFQs, or technical consultations regarding our MEP, ELV, or Telecom System Integration services, complete the form and a Sky Trace engineer will respond within one business day.</p>
      </div>
      <form className={styles.form} action={endpoint} method="POST">
        <label>Full Name*<input name="name" type="text" required /></label>
        <label>Company*<input name="company" type="text" required /></label>
        <label>Email*<input name="email" type="email" required /></label>
        <label>Phone<input name="phone" type="tel" /></label>
        <label>Enquiry Type*
          <select name="enquiryType" required defaultValue="">
            <option value="" disabled>Select enquiry type</option>
            <option>Project Enquiry</option>
            <option>RFQ - MEP</option>
            <option>RFQ - ELV</option>
            <option>RFQ - Telecom TSI</option>
            <option>Technical Support</option>
            <option>General</option>
          </select>
        </label>
        <label>Message*<textarea name="message" rows="5" required /></label>
        <button type="submit" className="btn-primary">Send Enquiry</button>
      </form>
    </div>
  );
}
