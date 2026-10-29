import { FileText, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

export default function Contact({ contact }) {
  const phoneHref = `tel:${contact.phone.replace(/[^\d+]/g, '')}`;

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <SectionHeading
            id="contact-title"
            kicker="Contact"
            title="Get in touch"
            intro="Platform engineering, DevSecOps, SRE, or tooling—happy to talk."
            icon={Mail}
          />
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${contact.email}`}>
              <Mail size={17} strokeWidth={2.25} aria-hidden="true" />
              {contact.email}
            </a>
            <a className="contact-link" href={phoneHref}>
              <Phone size={17} strokeWidth={2.25} aria-hidden="true" />
              {contact.phone}
            </a>
            <span className="contact-link is-text">
              <MapPin size={17} strokeWidth={2.25} aria-hidden="true" />
              {contact.location}
            </span>
            <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" aria-hidden="true" />
              LinkedIn
            </a>
            <a className="contact-link" href={contact.resume} target="_blank" rel="noreferrer">
              <FileText size={17} strokeWidth={2.25} aria-hidden="true" />
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
