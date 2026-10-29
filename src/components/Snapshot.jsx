import { Boxes, ShieldCheck, Workflow } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const cards = [
  {
    title: 'Production platforms',
    body: 'Operate multi-region Kubernetes and Nomad—monitoring, on-call, and automation that keeps customer workloads within SLA.',
    icon: Workflow,
  },
  {
    title: 'DevSecOps & supply chain',
    body: 'Image signing, pipeline scanning, admission policy, GitOps, and observability (Prometheus, Grafana, Cilium/eBPF).',
    icon: ShieldCheck,
  },
  {
    title: 'klew.dev',
    body: 'Open-source macOS app for incident investigation, with MCP so agents can use the same local cluster context.',
    icon: Boxes,
  },
];

export default function Snapshot({ about }) {
  return (
    <section className="section snapshot" id="story" aria-labelledby="snapshot-title">
      <div className="container">
        <SectionHeading
          id="snapshot-title"
          kicker="Overview"
          title="What I work on"
          intro="Platform engineering in production, security in the pipeline, and tooling when the defaults are not enough."
          icon={Workflow}
        />
        <div className="snapshot-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="snapshot-card">
                <span className="snapshot-icon">
                  <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            );
          })}
        </div>
        <div className="focus-row">
          <span className="focus-label">
            <ShieldCheck size={14} strokeWidth={2.25} aria-hidden="true" />
            Focus
          </span>
          {about.focusAreas.map((area) => (
            <span key={area} className="focus-pill">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
