export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {name}
        </p>
      </div>
    </footer>
  );
}
