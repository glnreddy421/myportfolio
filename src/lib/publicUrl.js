/** Public folder assets (respects Vite base, e.g. /myportfolio/ on GitHub Pages). */
export function publicUrl(path) {
  const clean = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}
