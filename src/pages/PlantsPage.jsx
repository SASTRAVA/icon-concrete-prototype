import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Callout from '../components/Callout.jsx';
import PageMeta from '../components/PageMeta.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import { plants } from '../content.js';

export default function PlantsPage() {
  return <>
    <PageMeta title="Batching Plants | Icon Concrete Hyderabad" description="Find Icon Concrete plant locations at Gandi Maisamma–Medchal Road and CBIT Post, Khanapur. Confirm delivery coverage for your project." path="/plants" />
    <section className="mp-editorial-hero mp-plants-hero"><Breadcrumbs current="Batching Plants" /><div><span className="mp-eyebrow">BATCHING PLANTS / HYDERABAD</span><h1>Local supply.<br /><em>Clear planning.</em></h1><p>Two plant addresses serve the Hyderabad area. Contact the team to confirm which location is best positioned to serve your site.</p></div><PhotoPlaceholder id="photo-1519003722824-194d4455a60c" alt="Ready mix concrete transport at a batching plant" className="mp-editorial-hero-photo" /></section>
    <section className="mp-plants-page mp-section"><div className="mp-section-heading"><div><span className="mp-eyebrow">PLANT LOCATIONS</span><h2>Find the right<br /><em>starting point.</em></h2></div><p>Exact coordinates, distances, operating hours, capacities and order availability are not published until verified.</p></div><div className="mp-plant-detail-grid">{plants.map((plant, index) => <article className="mp-plant-detail" key={plant.id}><PhotoPlaceholder id={plant.image} alt={plant.name + ' batching plant'} width={1200} /><span className="mp-plant-number">0{index + 1} / PLANT</span><div className="mp-plant-detail-body"><span className="mp-eyebrow">ICON CONCRETE / HYDERABAD</span><h3>{plant.name}</h3><p><MapPin size={16} />{plant.address}</p><div className="mp-plant-actions"><a className="mp-text-link" href={plant.directions} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowRight size={14} /></a><a className="mp-text-link" href="tel:+917997777078"><Phone size={14} /> CALL +91 7997777078</a><Link className="mp-button mp-button-dark" to="/contact" state={{ location: plant.address }}>DISCUSS DELIVERY FOR YOUR SITE <ArrowRight size={14} /></Link></div></div></article>)}</div><p className="mp-plant-note">Share your project location and ask which plant is best positioned to serve your site. Service coverage and timing must be confirmed.</p></section>
    <Callout title="Not sure which plant serves your site?" text="Send the project location and planned delivery date. The Icon Concrete team can discuss coverage." />
  </>;
}
