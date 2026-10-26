import Breadcrumbs from './Breadcrumbs.jsx';

export default function InnerPageHero({ label, title, accent, summary, image }) {
  return (
    <section className="mp-page-hero">
      {image && <div className="mp-page-hero-image" style={{ backgroundImage: `linear-gradient(90deg,rgba(17,19,22,.92),rgba(17,19,22,.54)),url(${image})` }} aria-hidden="true" />}
      <div className="mp-page-hero-content"><Breadcrumbs current={label} /><span className="mp-eyebrow">{label.toUpperCase()} / ICON CONCRETE</span><h1>{title}<br /><em>{accent}</em></h1><p>{summary}</p></div>
      <span className="mp-page-hero-grid" aria-hidden="true" />
    </section>
  );
}
