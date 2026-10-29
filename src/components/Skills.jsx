import {
  Cloud,
  Code2,
  Layers,
  Network,
  Shield,
  Container,
} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import SkillIcon from './SkillIcon.jsx';

const categoryIcons = {
  'Cloud Security': Shield,
  Kubernetes: Container,
  'Networking & Observability': Network,
  Infrastructure: Layers,
  Cloud: Cloud,
  'Programming & Data': Code2,
};

export default function Skills({ categories }) {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          kicker="Skills"
          title="Tools & stacks"
          intro="Technologies I use regularly in production—not a keyword dump."
          icon={Layers}
        />
        <div className="skills-bento">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.name] || Layers;
            return (
              <article key={cat.name} className="skill-panel">
                <h3>
                  <Icon size={16} strokeWidth={2.25} aria-hidden="true" />
                  {cat.name}
                </h3>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill.name}>
                      <SkillIcon icon={skill.icon} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
