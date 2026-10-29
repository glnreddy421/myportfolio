import { BookOpen, Boxes, Briefcase, Layers, Mail } from 'lucide-react';

const links = [
  { href: '#story', label: 'Story', icon: BookOpen },
  { href: '#klew', label: 'klew.dev', icon: Boxes },
  { href: '#work', label: 'Work', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Layers },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Nav({ name, title }) {
  const shortName = name.split(' ')[0];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <span className="brand-mark">{shortName.charAt(0)}</span>
          <span className="brand-text">
            <strong>{shortName}</strong>
            <small>{title}</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.href} href={link.href}>
                <Icon size={15} strokeWidth={2} aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
