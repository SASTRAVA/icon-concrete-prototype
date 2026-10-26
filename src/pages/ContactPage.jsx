import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import PageMeta from '../components/PageMeta.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import { plants } from '../content.js';

export default function ContactPage() {
  return <>
    <PageMeta title="Contact Icon Concrete | Request a Quote in Hyderabad" description="Contact Icon Premier Readymix Concrete in Hyderabad. Call, email or prepare a WhatsApp quote request with project details." path="/contact" />
    <section className="mp-contact-hero"><Breadcrumbs current="Contact & Request a Quote" /><span className="mp-eyebrow">CONTACT / QUOTE REQUEST</span><h1>Start with your<br /><em>site details.</em></h1><p>Send the project location, grade, quantity and preferred delivery date so the team can discuss the next steps.</p></section>
    <section className="mp-contact-page mp-section"><div className="mp-contact-sidebar"><div><span className="mp-eyebrow">TALK TO ICON CONCRETE</span><a href="tel:+917997777078"><Phone size={18} /> +91 7997777078</a><a href="mailto:info@iconconcrete.co.in"><Mail size={18} /> info@iconconcrete.co.in</a><a href="https://wa.me/917997777078" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Open WhatsApp</a></div><div><span className="mp-eyebrow">PLANT LOCATIONS</span>{plants.map((plant) => <Link to="/plants" key={plant.id}><MapPin size={16} /><span><strong>{plant.shortName}</strong><small>{plant.address}</small></span></Link>)}</div><p>Contact details and plant addresses are presented from the supplied company information. Confirm they are current before launch.</p></div><QuoteForm /></section>
  </>;
}
