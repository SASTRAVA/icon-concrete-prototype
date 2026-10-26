import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta.jsx';

export default function NotFoundPage() {
  return <section className="mp-not-found"><PageMeta title="Page Not Found | Icon Concrete" description="The page you requested could not be found. Explore the Icon Concrete website." path="/404" /><span className="mp-eyebrow">404 / PAGE NOT FOUND</span><h1>This page<br /><em>isn’t here.</em></h1><p>The link may be incorrect or the page may have moved.</p><div><Link className="mp-button mp-button-dark" to="/"><ArrowLeft size={15} /> BACK HOME</Link><Link className="mp-text-link" to="/contact">CONTACT ICON CONCRETE <ArrowRight size={15} /></Link></div></section>;
}
