import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Callout from '../components/Callout.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProjectGallery from '../components/ProjectGallery.jsx';
import { partners, testimonials } from '../content.js';

export default function ProjectsPage() {
  return <>
    <PageMeta title="Clients & Projects | Icon Concrete Hyderabad" description="Explore Icon Concrete client references and project photo placeholders. Project details and client permissions are marked for confirmation." path="/projects" />
    <section className="mp-page-hero mp-projects-hero"><Breadcrumbs current="Clients & Projects" /><div className="mp-page-hero-content"><span className="mp-eyebrow">CLIENTS & PROJECTS / HYDERABAD</span><h1>Work worth<br /><em>building on.</em></h1><p>Explore project categories and client references. Project details and image placeholders are clearly marked until approved material is available.</p><Link className="mp-button mp-button-orange" to="/gallery">OPEN THE GALLERY <ArrowRight size={15} /></Link></div></section>
    <section className="mp-projects-page mp-section"><div className="mp-section-heading"><div><span className="mp-eyebrow">PROJECT SHOWCASE</span><h2>Site work.<br /><em>Real stories.</em></h2></div><p>We are preparing a verified project library. Add project names, locations, grades and delivery details only after company and client approval.</p></div><ProjectGallery /></section>
    <section className="mp-client-section mp-section"><div className="mp-section-heading"><div><span className="mp-eyebrow">CLIENT REFERENCES</span><h2>Built through<br /><em>relationships.</em></h2></div><p>Client names are shown as text references. Logos and brand marks require approved assets and permission.</p></div><div className="mp-client-list">{partners.map((name, index) => <div key={name}><span>0{index + 1}</span><strong>{name}</strong></div>)}</div><small className="mp-confirm-note">[CONFIRM WITH CLIENT] Client permissions and approved logo artwork.</small></section>
    <section className="mp-testimonial-section mp-section"><div><span className="mp-eyebrow">EXISTING WEBSITE TESTIMONIALS</span><h2>Words from<br /><em>our clients.</em></h2><p>Testimonial wording is retained from the current company website. Confirm attribution and approval before publication.</p></div><div className="mp-testimonial-cards">{testimonials.map((item) => <blockquote key={item.name}><span>“</span><p>{item.quote}</p><footer><strong>{item.name}</strong><small>{item.role}</small></footer></blockquote>)}</div></section>
    <Callout title="Have a project to discuss?" text="Share your site location, grade, estimated quantity and delivery date." />
  </>;
}
