import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Callout({ title = 'Planning a pour?', text = 'Share the grade, quantity, site location and preferred date. The team can help confirm the next steps.' }) {
  return <section className="mp-callout"><div><span className="mp-eyebrow">LET’S PLAN THE NEXT STEP</span><h2>{title}</h2><p>{text}</p></div><Link className="mp-button mp-button-orange" to="/contact">REQUEST A QUOTE <ArrowRight size={16} /></Link></section>;
}
