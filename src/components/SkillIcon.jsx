export default function SkillIcon({ icon }) {
  if (!icon) return null;
  if (icon.startsWith('devicon') || icon.startsWith('fab ') || icon.startsWith('fas ')) {
    return <i className={icon} aria-hidden="true" />;
  }
  return null;
}
