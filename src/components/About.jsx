import { UserRound } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

function RichParagraph({ html }) {
  return <p className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function About({ about }) {
  return (
    <section className="section about" aria-labelledby="about-title">
      <div className="container about-split">
        <SectionHeading
          id="about-title"
          kicker="Background"
          title="About"
          intro="Senior engineer at Qualtrics; builder of klew.dev for on-call and agent-assisted investigations."
          icon={UserRound}
        />
        <div className="about-body">
          {about.description.map((paragraph) => (
            <RichParagraph key={paragraph.slice(0, 40)} html={paragraph} />
          ))}
        </div>
      </div>
    </section>
  );
}
