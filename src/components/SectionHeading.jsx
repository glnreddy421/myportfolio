export default function SectionHeading({ kicker, title, intro, icon: Icon, id }) {
  return (
    <div className="section-head">
      <p className="eyebrow">
        {Icon ? <Icon size={15} strokeWidth={2.25} aria-hidden="true" /> : null}
        <span>{kicker}</span>
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
