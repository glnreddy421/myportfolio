import { Boxes, Download, ExternalLink, MapPin, Server, Wrench } from 'lucide-react';
import { publicUrl } from '../lib/publicUrl.js';

export default function Hero({ about, contact }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <Server size={15} strokeWidth={2.25} aria-hidden="true" />
            <span>Qualtrics · DevSecOps · Kubernetes</span>
          </p>
          <h1>Systems engineer for production platforms—and the tools that support them.</h1>
          <p className="hero-lead">
            Hi, I&apos;m <strong>{about.name}</strong>. {about.title}. Eight years in
            infrastructure, security, and automation for teams that cannot afford downtime.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={publicUrl(contact.resume)}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} strokeWidth={2.25} aria-hidden="true" />
              Resume
            </a>
            <a className="btn btn-ghost" href="https://klew.dev" target="_blank" rel="noreferrer">
              <ExternalLink size={16} strokeWidth={2.25} aria-hidden="true" />
              klew.dev
            </a>
            <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-frame">
            <img src={publicUrl('images/profile.jpg')} alt={about.name} />
            <div className="profile-badge">
              <Wrench size={16} strokeWidth={2.25} aria-hidden="true" />
              <span>
                Maintainer of <strong>klew.dev</strong>
              </span>
            </div>
          </div>
          <ul className="hero-facts">
            <li>
              <MapPin size={16} strokeWidth={2.25} aria-hidden="true" />
              <div>
                <span>Location</span>
                <strong>{contact.location}</strong>
              </div>
            </li>
            <li>
              <Server size={16} strokeWidth={2.25} aria-hidden="true" />
              <div>
                <span>Role</span>
                <strong>Sr. Systems Engineer · DevSecOps Security</strong>
              </div>
            </li>
            <li>
              <Boxes size={16} strokeWidth={2.25} aria-hidden="true" />
              <div>
                <span>Side project</span>
                <strong>Kubernetes investigations + MCP for agents</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
