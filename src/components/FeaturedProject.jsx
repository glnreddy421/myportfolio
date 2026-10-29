import { ExternalLink, GitBranch, Terminal } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

export default function FeaturedProject({ build }) {
  if (!build) return null;

  return (
    <section className="section featured" id="klew" aria-labelledby="klew-title">
      <div className="container">
        <SectionHeading
          id="klew-title"
          kicker={build.label}
          title={
            <a href={build.url} target="_blank" rel="noreferrer" className="featured-title-link">
              {build.name}
            </a>
          }
          intro={build.tagline}
          icon={GitBranch}
        />
        <div className="featured-shell">
          <div className="featured-copy">
            <p className="featured-story">{build.story}</p>
            <ul className="featured-list">
              {build.highlights.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
            <div className="chip-row">
              {build.badges.map((b) => (
                <span key={b} className="chip chip-solid">
                  {b}
                </span>
              ))}
              {build.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <a className="btn btn-primary" href={build.url} target="_blank" rel="noreferrer">
              <ExternalLink size={16} strokeWidth={2.25} aria-hidden="true" />
              Visit {build.name}
            </a>
          </div>
          <aside className="featured-aside" aria-label="On-call workflow">
            <h3>
              <Terminal size={16} strokeWidth={2.25} aria-hidden="true" />
              On-call workflow
            </h3>
            <p className="workflow-block">
              <strong>Typical shift:</strong> tail logs in one terminal, check events in another, paste
              context into chat—repeat until the story makes sense.
            </p>
            <p className="workflow-block">
              <strong>With klew:</strong> one local view of workloads, events, and logs; MCP hooks the
              same facts into agents without shipping cluster data off-machine.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
