import { useState } from 'react';
import { Building2, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const PREVIEW_COUNT = 4;

function ExperienceItem({ item }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? item.responsibilities : item.responsibilities.slice(0, PREVIEW_COUNT);
  const hiddenCount = item.responsibilities.length - PREVIEW_COUNT;

  return (
    <article className="timeline-item">
      <div className="timeline-marker" aria-hidden="true">
        <Building2 size={16} strokeWidth={2.25} />
      </div>
      <div className="timeline-card">
        <header>
          <h3>{item.company}</h3>
          <p className="role">{item.position}</p>
          <time>{item.duration}</time>
        </header>
        <ul>
          {visible.map((line) => (
            <li key={line.slice(0, 50)}>{line}</li>
          ))}
        </ul>
        {item.responsibilities.length > PREVIEW_COUNT && (
          <button type="button" className="text-btn" onClick={() => setExpanded((v) => !v)}>
            {expanded ? (
              <>
                <ChevronUp size={15} aria-hidden="true" /> Show less
              </>
            ) : (
              <>
                <ChevronDown size={15} aria-hidden="true" /> {hiddenCount} more items
              </>
            )}
          </button>
        )}
      </div>
    </article>
  );
}

export default function Experience({ experiences }) {
  return (
    <section className="section experience" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          kicker="Experience"
          title="Roles"
          intro="Recent work in platform operations, cloud security, and automation."
          icon={Building2}
        />
        <div className="timeline">
          {experiences.map((item) => (
            <ExperienceItem key={item.company + item.duration} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
