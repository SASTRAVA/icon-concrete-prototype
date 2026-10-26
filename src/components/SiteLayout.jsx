import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, MessageCircle, Phone, X } from 'lucide-react';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Projects', '/projects'],
  ['Plants', '/plants'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
];
const whatsApp = 'https://wa.me/917997777078';

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="mp-header">
      <Link className="mp-brand" to="/" onClick={close} aria-label="Icon Concrete home">
        <span className="mp-brand-mark">I</span><span className="mp-brand-type">ICON<small>CONCRETE</small></span>
      </Link>
      <button className="mp-menu-toggle" type="button" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'mp-nav mp-nav-open' : 'mp-nav'} aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <NavLink key={href} to={href} end={href === '/'} className={({ isActive }) => isActive ? 'mp-nav-link is-active' : 'mp-nav-link'} onClick={close}>{label}</NavLink>
        ))}
        <Link className="mp-header-cta" to="/contact" onClick={close}>REQUEST A QUOTE <ArrowRight size={15} /></Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mp-footer">
      <div className="mp-footer-top">
        <div><Link className="mp-brand mp-footer-brand" to="/"><span className="mp-brand-mark">I</span><span className="mp-brand-type">ICON<small>CONCRETE</small></span></Link><p>Icon Premier Readymix Concrete<br />Hyderabad, Telangana · Est. 2017</p></div>
        <div><span className="mp-footer-label">EXPLORE</span><div className="mp-footer-links">{navItems.map(([name, path]) => <Link key={path} to={path}>{name}</Link>)}</div></div>
        <div><span className="mp-footer-label">CONTACT</span><a href="tel:+917997777078">+91 7997777078</a><a href="mailto:info@iconconcrete.co.in">info@iconconcrete.co.in</a><Link to="/plants">View both plant locations <ArrowRight size={13} /></Link></div>
      </div>
      <div className="mp-footer-bottom"><span>© {new Date().getFullYear()} Icon Premier Readymix Concrete</span><span>Details, grades and availability subject to confirmation.</span><Link to="/contact">Plan a pour <ArrowRight size={13} /></Link></div>
    </footer>
  );
}

function MobileActions() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;
  return <div className="mp-mobile-actions"><a href="tel:+917997777078" aria-label="Call Icon Concrete"><Phone /></a><a href={whatsApp} target="_blank" rel="noreferrer" aria-label="WhatsApp Icon Concrete"><MessageCircle /></a><Link to="/contact">REQUEST A QUOTE <ArrowRight size={15} /></Link></div>;
}

export default function SiteLayout() {
  return <><a className="mp-skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content"><Outlet /></main><Footer /><MobileActions /></>;
}
