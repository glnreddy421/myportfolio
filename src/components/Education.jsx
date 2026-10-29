import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

export default function Education({ items }) {
  return (
    <section className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          kicker="Education"
          title="Degrees"
          icon={GraduationCap}
        />
        <div className="education-grid">
          {items.map((item) => (
            <article key={item.institution + item.degree} className="edu-card">
              <div className="edu-icon" aria-hidden="true">
                <GraduationCap size={16} strokeWidth={2.25} />
              </div>
              <div>
                <time>{item.duration}</time>
                <h3>
                  {item.degree} · {item.field}
                </h3>
                <p>{item.institution}</p>
                <p className="muted">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
