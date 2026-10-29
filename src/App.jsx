import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Snapshot from './components/Snapshot.jsx';
import About from './components/About.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import about from './data/about.json';
import contact from './data/contact.json';
import experience from './data/experience.json';
import skills from './data/skills.json';
import education from './data/education.json';
export default function App() {
  return (
    <>
      <Nav name={about.name} title={about.title} />
      <main>
        <Hero about={about} contact={contact.contact} />
        <Snapshot about={about} />
        <About about={about} />
        <FeaturedProject build={about.featuredBuild} />
        <Experience experiences={experience.experiences} />
        <Skills categories={skills.skillCategories} />
        <Education items={education.education} />
        <Contact contact={contact.contact} />
      </main>
      <Footer name={about.name} />
    </>
  );
}
