import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Building2, Check, Factory, House, MapPin, Truck } from 'lucide-react';
import PageMeta from '../components/PageMeta.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import { partners, photo, plants, projects, services } from '../content.js';

const steps = [
  ['01', 'Plan the mix', 'Start with the grade and application in your project specification.'],
  ['02', 'Batch at plant', 'Discuss the order and requirements with the Icon Concrete team.'],
  ['03', 'Transport & deliver', 'Coordinate the site approach and delivery timing.'],
  ['04', 'Pour & support', 'Confirm access, safety needs and pump requirements.'],
];

export default function HomePage() {
  return <>
    <PageMeta title="Icon Concrete | Ready Mix Concrete in Hyderabad" description="Ready mix concrete in Hyderabad from Icon Premier Readymix Concrete. Explore services, plan a pour and request a quote." path="/" />
    <section className="mp-home-hero">
      <PhotoPlaceholder id="photo-1541888946425-d81bb19240f5" alt="Concrete pour at an active construction site" className="mp-home-hero-photo" priority />
      <div className="mp-home-shade" /><div className="mp-home-grid" aria-hidden="true" />
      <div className="mp-home-content"><span className="mp-eyebrow"><i /> ICON PREMIER READYMIX CONCRETE · HYDERABAD</span><h1>Strength you can<br />build on. <em>Delivered on time.</em></h1><p>Ready-mix concrete for builders, contractors and developers across Hyderabad. Tell us about your pour and we’ll help plan the next step.</p><div className="mp-home-actions"><Link className="mp-button mp-button-orange" to="/contact">REQUEST A QUOTE <ArrowRight size={16} /></Link><a className="mp-button mp-button-outline" href="https://wa.me/917997777078?text=Hi%20Icon%20Concrete%2C%20I%20would%20like%20to%20discuss%20a%20concrete%20requirement." target="_blank" rel="noreferrer">WHATSAPP US <ArrowRight size={16} /></a></div></div>
      <a className="mp-scroll-cue" href="#home-intro">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
    </section>
    <section className="mp-trust-strip" aria-label="Company information"><div><span>ESTABLISHED</span><strong>2017</strong></div><div><span>LOCAL OPERATIONS</span><strong>Hyderabad</strong></div><div><span>PLANT NETWORK</span><strong>2 locations</strong></div><div><span>BATCHING</span><strong>Automated & computerised</strong></div></section>
    <section className="mp-home-intro mp-section" id="home-intro"><div><span className="mp-eyebrow">CONCRETE SUPPLY / HYDERABAD</span><h2>Good pours begin<br />with <em>clear planning.</em></h2></div><div><p>Founded in 2017, Icon Premier Readymix Concrete serves builders and contractors from two plant locations in the Hyderabad area. Share your project specification and site details to discuss supply, delivery and pump requirements.</p><Link className="mp-text-link" to="/about">ABOUT ICON CONCRETE <ArrowRight size={15} /></Link></div></section>
    <section className="mp-home-services mp-section"><div className="mp-section-heading"><div><span className="mp-eyebrow">WHAT WE DO</span><h2>Six ways to<br /><em>move the pour.</em></h2></div><Link className="mp-text-link" to="/services">ALL PRODUCTS & SERVICES <ArrowRight size={15} /></Link></div><div className="mp-service-preview">{services.map((item, i) => <Link className="mp-service-preview-card" to="/services" key={item.id}><span>0{i + 1}</span><strong>{item.title}</strong><ArrowRight size={16} /></Link>)}</div></section>
    <section className="mp-home-process mp-section"><div><span className="mp-eyebrow">HOW WE WORK</span><h2>One clear plan.<br /><em>Four steps.</em></h2><p>Site safety, specification and timing belong in the conversation from the start.</p><Link className="mp-text-link" to="/services">PLAN WITH THE TEAM <ArrowRight size={15} /></Link></div><div className="mp-home-steps">{steps.map(([n, title, detail]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{detail}</p></div><Check size={16} /></article>)}</div></section>
    <section className="mp-featured-projects mp-section"><div className="mp-section-heading"><div><span className="mp-eyebrow">CLIENTS & PROJECTS</span><h2>Work worth<br /><em>building on.</em></h2></div><Link className="mp-text-link" to="/projects">EXPLORE PROJECTS <ArrowRight size={15} /></Link></div><div className="mp-feature-grid">{projects.slice(0, 3).map((project) => <Link className="mp-feature-card" to="/projects" key={project.category}><PhotoPlaceholder id={project.image} alt={project.category + ' construction site'} width={900} /><span>{project.category.toUpperCase()} / PROJECT PLACEHOLDER</span><strong>{project.title}</strong></Link>)}</div><div className="mp-home-clients"><span className="mp-eyebrow">CLIENTS / SUBJECT TO APPROVAL</span><div>{partners.map((name) => <span key={name}>{name}</span>)}</div></div></section>
    <section className="mp-home-plants mp-section"><div className="mp-home-plants-copy"><span className="mp-eyebrow">HYDERABAD PLANT NETWORK</span><h2>Closer to<br /><em>your site.</em></h2><p>Two locations serve the Hyderabad area. Ask which plant is best positioned to serve your project.</p><Link className="mp-text-link" to="/plants">VIEW BATCHING PLANTS <ArrowRight size={15} /></Link></div><div className="mp-home-plant-cards">{plants.map((plant) => <Link to="/plants" key={plant.id}><span><MapPin size={15} /> PLANT LOCATION</span><strong>{plant.name}</strong><small>{plant.address}</small><ArrowRight size={16} /></Link>)}</div></section>
    <section className="mp-home-why mp-section"><div><span className="mp-eyebrow">WHY ICON CONCRETE</span><h2>Young minds.<br />Live on the level.<br /><em>Build relationships.</em></h2></div><p>Local focus, clear coordination and a team shaped by experience in ready-mix and construction. Learn about the company and its approach.</p><Link className="mp-button mp-button-light" to="/about">OUR STORY <ArrowRight size={15} /></Link></section>
    <section className="mp-home-final"><span className="mp-eyebrow">HAVE A PROJECT IN MIND?</span><h2>Planning a pour?</h2><p>Get in touch to discuss a quote, delivery coverage and timing.</p><Link className="mp-button mp-button-orange" to="/contact">REQUEST A QUOTE <ArrowRight size={16} /></Link></section>
  </>;
}
