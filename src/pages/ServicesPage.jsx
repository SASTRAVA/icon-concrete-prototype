import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Callout from '../components/Callout.jsx';
import PageMeta from '../components/PageMeta.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import PourPlanner from '../components/PourPlanner.jsx';
import { gradeGuide, photo, services } from '../content.js';

export default function ServicesPage() {
  return <>
    <PageMeta title="Ready-Mix Concrete Services | Icon Concrete Hyderabad" description="Explore ready-mix concrete, pumping, residential and commercial delivery, transport and additives from Icon Concrete in Hyderabad." path="/services" />
    <section className="mp-editorial-hero mp-services-hero"><Breadcrumbs current="Products & Services" /><div><span className="mp-eyebrow">PRODUCTS & SERVICES / HYDERABAD</span><h1>Concrete for<br /><em>what’s next.</em></h1><p>Review the services and share your project specification to discuss the right supply and delivery plan.</p></div><PhotoPlaceholder id="photo-1541888946425-d81bb19240f5" alt="Ready-mix concrete arriving at a project site" className="mp-editorial-hero-photo" /></section>
    <section className="mp-service-details mp-section"><div className="mp-services-intro"><span className="mp-eyebrow">SIX SERVICE AREAS</span><h2>Support for<br /><em>each pour.</em></h2><p>Availability depends on the project location, specification and schedule. Ask the team to confirm your requirements.</p></div><div className="mp-service-detail-list">{services.map((service, index) => <article className="mp-service-detail" id={service.id} key={service.id}><div className="mp-service-detail-photo"><PhotoPlaceholder id={service.image} alt={service.title + ' at a construction site'} width={1000} /><span>0{index + 1} / SERVICE</span></div><div className="mp-service-detail-copy"><span className="mp-eyebrow">0{index + 1} / {service.title.toUpperCase()}</span><h3>{service.title}</h3><p>{service.short}</p><div><span>TYPICAL APPLICATIONS</span><p>{service.applications}</p></div><Link className="mp-text-link" to="/contact" state={{ service: service.title }}>ENQUIRE ABOUT {service.title.toUpperCase()} <ArrowRight size={15} /></Link></div></article>)}</div></section>
    <section className="mp-grade-guide mp-section" id="grade-guide"><div><span className="mp-eyebrow">CONCRETE GRADE REFERENCE</span><h2>Read the<br /><em>specification.</em></h2><span className="mp-confirm-badge">[CONFIRM WITH CLIENT] GRADES OFFERED</span><p>Common grades with example applications for orientation. Grade suitability and availability must be confirmed with the project engineer and Icon Concrete.</p></div><div className="mp-grade-table"><div className="mp-grade-row mp-grade-header"><span>GRADE</span><span>EXAMPLE APPLICATION</span></div>{gradeGuide.map(([grade, use]) => <div className="mp-grade-row" key={grade}><strong>{grade}</strong><span>{use}</span></div>)}</div></section>
    <section className="mp-calculator-section mp-section"><div><span className="mp-eyebrow">CONCRETE VOLUME CALCULATOR</span><h2>Estimate the<br /><em>quantity.</em></h2><p>Enter length, width and depth to estimate a simple geometric volume in cubic metres. Footings and columns use the same volume formula with a shape-specific dimension label.</p><p>Allow for project details, openings, wastage, reinforcement displacement and site conditions. Confirm the final quantity against drawings and with the site team.</p></div><PourPlanner /></section>
    <Callout title="Need a concrete supply plan?" text="Send the grade, estimated quantity, site location and required delivery date." />
  </>;
}
