import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, Check, ChevronLeft, ChevronRight,
  ClipboardCheck, Factory, MapPin, Menu, Phone, Ruler, ShieldCheck, Truck,
  X, MessageCircle, Building2, House, Plus
} from 'lucide-react';
import './icon-readymix.css';

const phone = '+91 7997777078';
const phoneDigits = '917997777078';
const email = 'info@iconconcrete.co.in';
const grades = [
  { name: 'M10', use: 'PCC & levelling' },
  { name: 'M15', use: 'Blinding & pathways' },
  { name: 'M20', use: 'Residential slabs' },
  { name: 'M25', use: 'Beams & columns' },
  { name: 'M30', use: 'Structural pours' },
  { name: 'M35', use: 'Higher-load structures' },
  { name: 'M40', use: 'Specialist applications' },
];
const services = [
  { title: 'Ready-mix concrete', text: 'Concrete batched to your project specification and coordinated for delivery.', Icon: Factory },
  { title: 'Concrete pumping', text: 'Ask about pump support for sites where access or pour height needs planning.', Icon: Ruler },
  { title: 'Commercial delivery', text: 'Coordinate supply around commercial site access and planned pour windows.', Icon: Building2 },
  { title: 'Residential delivery', text: 'Plan concrete delivery for home foundations, slabs and structural work.', Icon: House },
  { title: 'Transport', text: 'Discuss transit mixer access, site approach and delivery timing with the team.', Icon: Truck },
  { title: 'Concrete additives', text: 'Enquire about admixtures to suit your project specification and conditions.', Icon: Plus },
];
const partners = ['Trishala', 'Synergy', 'Green Space', 'AGR Construction', 'Riddhi', 'Dream View', 'AGA Infra (My Home Group)', 'Happy Homes Housing'];
const testimonials = [
  { quote: 'We are happy with the professional and quality conscious approach, including the unparalleled teamwork exhibited by this team.', name: 'Green Space', role: 'Client feedback' },
  { quote: 'We are happy with the professional and quality conscious approach of the entire RMC team. Special appreciation for the RMC site team for excellent coordination, timely supply and adhering to best site safety practices.', name: 'Happy Homes Housing', role: 'Client feedback' },
  { quote: 'The Icon Concrete industry is growing due to the superior technical properties over normal concrete, but the potential is still huge.', name: 'AGA Infra (My Home Group)', role: 'Client feedback' },
];
const projects = [
  { category: 'Residential', title: 'Residential construction', description: 'A placeholder for a verified residential project case study.', image: 'photo-1600607687939-ce8a6c25118c' },
  { category: 'Commercial', title: 'Commercial development', description: 'A placeholder for a verified commercial project case study.', image: 'photo-1486406146926-c627a92ad1ab' },
  { category: 'Infrastructure', title: 'Infrastructure works', description: 'A placeholder for a verified infrastructure project case study.', image: 'photo-1541888946425-d81bb19240f5' },
  { category: 'Residential', title: 'Site pour in progress', description: 'Replace with an approved project name, location and delivery details.', image: 'photo-1504307651254-35680f356dfd' },
];
const plants = [
  {
    id: 'north', name: 'Gandi Maisamma · Medchal Road',
    address: 'Survey No. 492, 493, Gandi Maisamma to Medchal Road, Telangana',
    map: 'https://maps.google.com/?q=Survey+No+492+493+Gandi+Maisamma+to+Medchal+Road+Telangana',
    photo: 'photo-1519003722824-194d4455a60c',
  },
  {
    id: 'south', name: 'CBIT Post · Khanapur',
    address: 'CBIT Post, Khanapur, Hyderabad',
    map: 'https://maps.google.com/?q=CBIT+Post+Khanapur+Hyderabad',
    photo: 'photo-1487958449943-2429e8be8625',
  },
];
const image = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

function SectionLabel({ number, children }) {
  return <div className="ic-kicker"><span>{number}</span><span>{children}</span></div>;
}

export default function IconReadymix() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const [grade, setGrade] = useState('M25');
  const [service, setService] = useState('Ready-mix concrete');
  const [volume, setVolume] = useState('');
  const [pump, setPump] = useState('No');
  const [application, setApplication] = useState('Slab');
  const [wizardStep, setWizardStep] = useState(0);
  const [plant, setPlant] = useState(plants[0].id);
  const [activeGrade, setActiveGrade] = useState('M25');
  const [calculatorType, setCalculatorType] = useState('Slab');
  const [projectFilter, setProjectFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [testimonial, setTestimonial] = useState(0);
  const [dimensions, setDimensions] = useState({ length: '', width: '', thickness: '' });
  const [form, setForm] = useState({ name: '', phone: '', location: '', date: '', company: '', projectType: 'Residential' });
  const chosenPlant = plants.find((item) => item.id === plant) ?? plants[0];
  const visibleProjects = projectFilter === 'All' ? projects : projects.filter((item) => item.category === projectFilter);
  const calculatedVolume = useMemo(() => {
    const { length, width, thickness } = dimensions;
    if (!length || !width || !thickness) return 0;
    const depth = calculatorType === 'Column' ? Number(thickness) : Number(thickness) / 1000;
    return Number((Number(length) * Number(width) * depth).toFixed(2));
  }, [dimensions, calculatorType]);
  const quoteSummary = `${application} · ${grade} · ${service}${volume ? ` · ${volume} m³` : ''}`;
  const whatsappMessage = `Hi Icon Concrete, I'd like a quote. Name: ${form.name}. Phone: ${form.phone}. Project type: ${form.projectType}. Grade: ${grade}. Service: ${service}. Quantity: ${volume || 'to be confirmed'} m³. Pump required: ${pump}. Site: ${form.location}. Required date: ${form.date}.${form.company ? ` Company / project: ${form.company}.` : ''}`;
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const elements = document.querySelectorAll('.ic-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!quoteOpen && !lightbox) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') { setQuoteOpen(false); setLightbox(null); }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [quoteOpen, lightbox]);

  function openQuote(selectedService = service) {
    setService(selectedService);
    setQuoteSent(false);
    setQuoteOpen(true);
  }

  function updateDimension(key, value) {
    setDimensions((current) => ({ ...current, [key]: value }));
  }

  function submitQuote(event) {
    event.preventDefault();
    setQuoteSent(true);
  }

  return (
    <main className="icon-site" id="top">
      <header className="ic-nav">
        <a className="ic-brand" href="#top" aria-label="Icon Concrete home">
          <span className="ic-brand-symbol">I</span><span className="ic-brand-type">ICON<small>CONCRETE</small></span>
        </a>
        <nav className={menuOpen ? 'ic-nav-links is-open' : 'ic-nav-links'} aria-label="Main navigation">
          {[['About', '#about'], ['Services', '#services'], ['Projects', '#projects'], ['Plants', '#plants'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <button className="ic-nav-cta" onClick={() => openQuote()}>REQUEST A QUOTE <ArrowRight size={15} /></button>
        <button className="ic-menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="ic-hero" aria-labelledby="hero-title">
        <img className="ic-hero-image" src={image('photo-1541888946425-d81bb19240f5', 2000)} alt="Concrete pour at an active construction site — replace with a real Icon Concrete photo" fetchPriority="high" />
        <div className="ic-hero-shade" />
        <div className="ic-hero-grid" aria-hidden="true" />
        <div className="ic-hero-content">
          <div className="ic-overline"><span /> ICON PREMIER READYMIX CONCRETE <i>·</i> HYDERABAD</div>
          <h1 id="hero-title">Strength you can<br />build on. <em>Delivered on time.</em></h1>
          <p>Ready-mix concrete for contractors, builders and developers across Hyderabad. Tell us about your pour and we’ll help plan the next step.</p>
          <div className="ic-hero-actions">
            <button className="ic-button ic-button-orange" onClick={() => openQuote()}>REQUEST A QUOTE <ArrowRight size={17} /></button>
            <a className="ic-button ic-button-outline" href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent('Hi Icon Concrete, I would like to discuss a concrete requirement.')}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WHATSAPP US</a>
          </div>
        </div>
        <div className="ic-hero-stamp"><span>ICON / 2017</span><strong>Concrete<br />for the work<br />ahead.</strong><ArrowDownRight /></div>
        <div className="ic-hero-bottom"><span>READY MIX CONCRETE · PUMPING · DELIVERY</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
      </section>

      <section className="ic-trust" aria-label="Company facts">
        <div><span>01 / LOCAL EXPERIENCE</span><strong>Est. 2017</strong><small>Hyderabad, India</small></div>
        <div><span>02 / PLANT NETWORK</span><strong>2 plants</strong><small>Serving Hyderabad area</small></div>
        <div><span>03 / BATCHING</span><strong>Automated</strong><small>Computerised batching</small></div>
        <div><span>04 / DELIVERY</span><strong>On-time focus</strong><small>Planned around your pour</small></div>
      </section>

      <section className="ic-about ic-section" id="about">
        <div className="ic-about-intro ic-reveal">
          <SectionLabel number="01">ABOUT ICON CONCRETE</SectionLabel>
          <h2>Young minds.<br /><em>Solid work.</em></h2>
          <p className="ic-lead">Established in 2017, Icon Premier Readymix Concrete brings together a young and experienced team from the ready-mix and construction fields.</p>
          <p>Based in Hyderabad, the team works with customers to plan concrete supply around each project’s specification, location and schedule. Speak with us to confirm what your site needs.</p>
          <a className="ic-text-link" href="#plants">MEET THE PLANT NETWORK <ArrowRight size={15} /></a>
        </div>
        <div className="ic-about-visual ic-reveal">
          <img src={image('photo-1504307651254-35680f356dfd', 1200)} alt="Building construction site — replace with a real Icon Concrete photo" loading="lazy" />
          <span className="ic-photo-placeholder">REPLACE WITH REAL PHOTO</span>
          <div className="ic-about-note"><span>HYDERABAD, TELANGANA</span><strong>Local knowledge.<br />Clear coordination.</strong></div>
          <div className="ic-about-watermark">2017</div>
        </div>
      </section>

      <section className="ic-values ic-section" aria-label="Our approach">
        <div className="ic-values-heading ic-reveal"><SectionLabel number="02">HOW WE SHOW UP</SectionLabel><h2>Built on more<br />than <em>concrete.</em></h2></div>
        <div className="ic-value-grid">
          <article className="ic-value-card ic-reveal"><span>01</span><h3>Young minds</h3><p>Bring fresh thinking together with experience in ready-mix and construction.</p></article>
          <article className="ic-value-card ic-reveal"><span>02</span><h3>Live on the level</h3><p>Act with care for customers, employees and the communities around our work.</p></article>
          <article className="ic-value-card ic-reveal"><span>03</span><h3>Build relationships</h3><p>Good projects depend on people who communicate clearly and work together.</p></article>
          <article className="ic-value-card ic-reveal"><span>04</span><h3>Deliver locally</h3><p>Focus on Hyderabad and coordinate supply around the needs of each site.</p></article>
        </div>
      </section>

      <section className="ic-services ic-section" id="services">
        <div className="ic-section-heading ic-reveal"><div><SectionLabel number="03">PRODUCTS & SERVICES</SectionLabel><h2>Concrete for<br /><em>what’s next.</em></h2></div><p>Share your drawings, grade and site details. The Icon Concrete team can discuss the right service and delivery plan for your project.</p></div>
        <div className="ic-service-grid">
          {services.map(({ title, text, Icon }, index) => (
            <article className="ic-service-card ic-reveal" key={title}>
              <div className="ic-service-top"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3><p>{text}</p>
              <button onClick={() => openQuote(title)}>ENQUIRE <ArrowRight size={14} /></button>
            </article>
          ))}
        </div>
        <div className="ic-safety-note"><ShieldCheck /><p><strong>Safety belongs in every pour plan.</strong> Confirm site access, traffic movement and pour coordination with the team before delivery.</p></div>
      </section>

      <section className="ic-process ic-section">
        <div className="ic-process-intro ic-reveal"><SectionLabel number="04">HOW WE WORK</SectionLabel><h2>One clear plan.<br /><em>Four steps.</em></h2><p>Each project has its own requirements. We coordinate the details with you and confirm availability before the pour.</p></div>
        <div className="ic-timeline">
          {[
            ['01', 'Plan the mix', 'Start with the grade and application from your project specification.'],
            ['02', 'Batch at plant', 'The plant team prepares the order with computerised batching.'],
            ['03', 'Transport & deliver', 'Coordinate route, access and timing for your project site.'],
            ['04', 'Pour & support', 'Confirm site readiness, safety needs and pump requirements.'],
          ].map(([n, title, detail]) => <article className="ic-step ic-reveal" key={n}><span>{n}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowRight aria-hidden="true" /></article>)}
        </div>
      </section>

      <section className="ic-grade-section ic-section" id="grades">
        <div className="ic-grade-heading ic-reveal"><div><SectionLabel number="05">CONCRETE GRADE GUIDE</SectionLabel><h2>Start with the<br /><em>specification.</em></h2></div><div className="ic-confirm-tag">[CONFIRM GRADES OFFERED]</div></div>
        <p className="ic-grade-note">Common grades and example applications are shown as a planning guide. Final grade and use must follow the project engineer’s specification and be confirmed with Icon Concrete.</p>
        <div className="ic-grade-tabs" role="tablist" aria-label="Concrete grades">
          {grades.map((item) => <button key={item.name} role="tab" aria-selected={activeGrade === item.name} className={activeGrade === item.name ? 'active' : ''} onClick={() => setActiveGrade(item.name)}>{item.name}</button>)}
        </div>
        <div className="ic-grade-detail" role="tabpanel"><strong>{activeGrade}</strong><div><span>EXAMPLE APPLICATION</span><h3>{grades.find((item) => item.name === activeGrade)?.use}</h3></div><p>Confirm grade availability and suitability with your structural engineer and Icon Concrete.</p><button className="ic-text-link" onClick={() => { setGrade(activeGrade); openQuote('Ready-mix concrete'); }}>ASK ABOUT {activeGrade} <ArrowRight size={15} /></button></div>
      </section>

      <section className="ic-planner" id="planner">
        <div className="ic-planner-copy ic-reveal"><SectionLabel number="06">INTERACTIVE POUR PLANNER</SectionLabel><h2>Make a plan<br />for the <em>pour.</em></h2><p>Choose an application, review grade options and estimate concrete volume. Your selections carry into the quote form.</p><div className="ic-planner-badge"><ClipboardCheck /><span>Project specification always takes priority.</span></div></div>
        <div className="ic-planner-card ic-reveal">
          <div className="ic-plan-top"><span>POUR PLANNER / {String(wizardStep + 1).padStart(2, '0')}</span><div>{['STRUCTURE', 'GRADE', 'VOLUME'].map((step, index) => <button key={step} className={wizardStep === index ? 'active' : ''} onClick={() => setWizardStep(index)} aria-label={`Go to ${step.toLowerCase()} step`}>{String(index + 1).padStart(2, '0')} <span>{step}</span></button>)}</div></div>
          <div className="ic-plan-body">
            <div className="ic-plan-graphic" aria-hidden="true"><div className="ic-plan-ring ring-one" /><div className="ic-plan-ring ring-two" /><div className="ic-plan-cube"><span>{wizardStep === 0 ? application.toUpperCase() : wizardStep === 1 ? grade : `${volume || '—'} m³`}</span></div><span className="ic-plan-coordinate">17°29' N<br />78°26' E</span><span className="ic-plan-grid-id">ICON / SITE PLAN</span></div>
            <div className="ic-plan-controls">
              {wizardStep === 0 && <><span className="ic-mini-label">01 / WHAT ARE YOU POURING?</span><h3>Choose a structure</h3><div className="ic-choice-grid">{['Foundation', 'Slab', 'Columns & core', 'Infrastructure'].map((item) => <button key={item} className={application === item ? 'selected' : ''} onClick={() => setApplication(item)}>{item}{application === item && <Check size={15} />}</button>)}</div><button className="ic-button ic-button-dark" onClick={() => setWizardStep(1)}>NEXT / CHOOSE GRADE <ArrowRight size={16} /></button></>}
              {wizardStep === 1 && <><span className="ic-mini-label">02 / CHECK THE DRAWING</span><h3>Select a grade</h3><p>Use the grade on your engineer’s specification. Availability needs confirmation.</p><div className="ic-plan-grades">{grades.map((item) => <button key={item.name} className={grade === item.name ? 'selected' : ''} onClick={() => setGrade(item.name)}>{item.name}</button>)}</div><div className="ic-choice-grid ic-service-choices">{['Ready-mix concrete', 'Concrete pumping'].map((item) => <button key={item} className={service === item ? 'selected' : ''} onClick={() => setService(item)}>{item}{service === item && <Check size={15} />}</button>)}</div><div className="ic-plan-nav"><button onClick={() => setWizardStep(0)}>BACK</button><button className="ic-button ic-button-dark" onClick={() => setWizardStep(2)}>NEXT / ESTIMATE VOLUME <ArrowRight size={16} /></button></div></>}
              {wizardStep === 2 && <><span className="ic-mini-label">03 / ESTIMATE YOUR VOLUME</span><h3>Size the pour</h3><p>Enter dimensions in metres. This estimate is for planning and should be checked against your project drawings.</p><div className="ic-calculator-types" role="group" aria-label="Choose a volume calculator">{['Slab', 'Footing', 'Column'].map((type) => <button key={type} className={calculatorType === type ? 'selected' : ''} onClick={() => setCalculatorType(type)}>{type}</button>)}</div><div className="ic-volume-fields">{[['length', calculatorType === 'Column' ? 'Width (m)' : 'Length (m)'], ['width', 'Width (m)'], ['thickness', calculatorType === 'Column' ? 'Height (m)' : calculatorType === 'Footing' ? 'Depth (mm)' : 'Thickness (mm)']].map(([key, label]) => <label key={key}>{label}<input type="number" inputMode="decimal" min="0" step="0.01" value={dimensions[key]} onChange={(event) => updateDimension(key, event.target.value)} /></label>)}</div><div className="ic-volume-result"><span>ESTIMATED VOLUME</span><strong>{calculatedVolume ? calculatedVolume : '—'} <small>m³</small></strong></div><div className="ic-plan-nav"><button onClick={() => setWizardStep(1)}>BACK</button><button className="ic-button ic-button-dark" onClick={() => { if (calculatedVolume) setVolume(String(calculatedVolume)); openQuote(); }}>GET QUOTE FOR THIS VOLUME <ArrowRight size={16} /></button></div></>}
            </div>
          </div>
        </div>
      </section>

      <section className="ic-projects ic-section" id="projects">
        <div className="ic-section-heading ic-reveal"><div><SectionLabel number="07">CLIENTS & PROJECTS</SectionLabel><h2>Work worth<br /><em>building on.</em></h2></div><p>Project photography and case study details will be added after real site photos and client approvals are available.</p></div>
        <div className="ic-project-filters" role="group" aria-label="Filter project gallery">{['All', 'Residential', 'Commercial', 'Infrastructure'].map((item) => <button key={item} className={projectFilter === item ? 'active' : ''} onClick={() => setProjectFilter(item)}>{item}</button>)}</div>
        <div className="ic-project-grid">{visibleProjects.map((item) => <button className="ic-project-card ic-reveal" key={item.title} onClick={() => setLightbox(item)} aria-label={`View ${item.title} placeholder`}><img src={image(item.image, 900)} alt={`${item.category} construction photo placeholder — replace with real photo`} loading="lazy" /><span className="ic-photo-placeholder">REPLACE WITH REAL PHOTO</span><span className="ic-project-meta">{item.category} / CASE STUDY PLACEHOLDER</span><strong>{item.title}</strong><span className="ic-project-open">VIEW DETAILS <ArrowRight size={14} /></span></button>)}</div>
        <div className="ic-client-strip"><SectionLabel number="08">CLIENTS</SectionLabel><div>{partners.map((client) => <span key={client}>{client}</span>)}</div><small>Client names shown for reference; confirm logo usage and permissions before publication.</small></div>
      </section>

      <section className="ic-testimonials ic-section">
        <div className="ic-testimonial-heading ic-reveal"><SectionLabel number="09">CLIENT WORDS</SectionLabel><h2>Trust built<br />through <em>work.</em></h2><p>Testimonials from the existing Icon Concrete website.</p></div>
        <article className="ic-quote-card ic-reveal"><span className="ic-quote-mark">“</span><blockquote>{testimonials[testimonial].quote}</blockquote><div className="ic-quote-credit"><span className="ic-quote-initials">{testimonials[testimonial].name.slice(0, 2).toUpperCase()}</span><span><strong>{testimonials[testimonial].name}</strong><small>{testimonials[testimonial].role}</small></span></div><div className="ic-quote-controls"><span>{String(testimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span><button aria-label="Previous testimonial" onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)}><ChevronLeft /></button><button aria-label="Next testimonial" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}><ChevronRight /></button></div></article>
      </section>

      <section className="ic-gallery ic-section" id="gallery">
        <div className="ic-gallery-heading ic-reveal"><SectionLabel number="10">GALLERY</SectionLabel><h2>On site.<br /><em>In progress.</em></h2><p>Image placeholders are clearly marked. Replace them with approved photos from Icon Concrete plants, mixers and site pours.</p></div>
        <div className="ic-gallery-grid">{projects.slice(0, 3).map((item, index) => <button key={item.title} className={`ic-gallery-item ic-gallery-${index + 1} ic-reveal`} onClick={() => setLightbox(item)}><img src={image(item.image, 1000)} alt={`${item.category} site photo placeholder — replace with real photo`} loading="lazy" /><span className="ic-photo-placeholder">REPLACE WITH REAL PHOTO</span><span>{item.category} / 0{index + 1}</span></button>)}</div>
      </section>

      <section className="ic-plants ic-section" id="plants">
        <div className="ic-section-heading ic-reveal"><div><SectionLabel number="11">HYDERABAD PLANT NETWORK</SectionLabel><h2>Closer to<br /><em>your site.</em></h2></div><p>Two plant locations serve the Hyderabad area. Share your project location so the team can confirm the nearest plant and delivery coverage.</p></div>
        <div className="ic-plant-grid">{plants.map((item, index) => <article className={`ic-plant-card ic-reveal ${plant === item.id ? 'is-active' : ''}`} key={item.id} onMouseEnter={() => setPlant(item.id)}><div className="ic-plant-image"><img src={image(item.photo, 1100)} alt={`${item.name} facility photo placeholder — replace with real photo`} loading="lazy" /><span className="ic-photo-placeholder">REPLACE WITH REAL PHOTO</span><span className="ic-plant-index">0{index + 1} / PLANT</span></div><div className="ic-plant-content"><h3>{item.name}</h3><p><MapPin size={16} />{item.address}</p><span className="ic-nearest"><Check size={14} /> Ask which plant is nearest to your site.</span><div className="ic-plant-links"><a href={item.map} target="_blank" rel="noreferrer">OPEN MAP <ArrowRight size={14} /></a><button onClick={() => { setPlant(item.id); setForm((current) => ({ ...current, location: item.address })); openQuote(); }}>ENQUIRE <ArrowRight size={14} /></button></div></div></article>)}</div>
      </section>

      <section className="ic-contact" id="contact">
        <div className="ic-contact-main ic-reveal"><SectionLabel number="12">PLAN YOUR NEXT POUR</SectionLabel><h2>Ready when<br />your site <em>is.</em></h2><p>Send the project location, grade, volume and preferred date. Get a response from the Icon Concrete team to discuss availability.</p><button className="ic-button ic-button-orange" onClick={() => openQuote()}>GET A QUOTE IN 30 MINUTES <ArrowRight size={17} /></button><small>Response time is a target and needs confirmation with the company.</small></div>
        <div className="ic-contact-details ic-reveal"><div><span>CALL THE TEAM</span><a href="tel:+917997777078"><Phone size={17} />{phone}</a></div><div><span>EMAIL</span><a href={`mailto:${email}`}>{email}</a></div><div><span>WHATSAPP</span><a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noreferrer"><MessageCircle size={17} />Message Icon Concrete</a></div><div><span>BASED IN</span><strong>Hyderabad, Telangana, India</strong></div></div>
      </section>

      <footer className="ic-footer">
        <a className="ic-brand" href="#top" aria-label="Icon Concrete home"><span className="ic-brand-symbol">I</span><span className="ic-brand-type">ICON<small>CONCRETE</small></span></a>
        <span>READY-MIX CONCRETE · HYDERABAD · EST. 2017</span><div><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <small>© {new Date().getFullYear()} Icon Premier Readymix Concrete. Project details, grades and availability must be confirmed.</small>
      </footer>

      <div className="ic-mobile-bar"><a href="tel:+917997777078" aria-label="Call Icon Concrete"><Phone /></a><a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noreferrer" aria-label="WhatsApp Icon Concrete"><MessageCircle /></a><button onClick={() => openQuote()}>REQUEST A QUOTE <ArrowRight size={16} /></button></div>
      <a className="ic-float-whatsapp" href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noreferrer" aria-label="Chat with Icon Concrete on WhatsApp"><MessageCircle /></a>

      {quoteOpen && <div className="ic-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setQuoteOpen(false); }}><section className="ic-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title"><button className="ic-modal-close" aria-label="Close quote form" onClick={() => setQuoteOpen(false)}><X /></button>{quoteSent ? <div className="ic-quote-success"><span><Check /></span><SectionLabel number="QUOTE REQUEST">DETAILS READY</SectionLabel><h2 id="quote-title">One last step.</h2><p>Review your enquiry in WhatsApp and press send to contact the Icon Concrete team.</p><a className="ic-button ic-button-orange" href={whatsappUrl} target="_blank" rel="noreferrer">SEND VIA WHATSAPP <ArrowRight size={16} /></a><button className="ic-modal-back" onClick={() => setQuoteSent(false)}>EDIT DETAILS</button></div> : <><SectionLabel number="QUOTE REQUEST">YOUR PROJECT DETAILS</SectionLabel><h2 id="quote-title">Let’s plan<br />your pour.</h2><p className="ic-modal-summary">{quoteSummary} · The team will confirm mix availability, plant coverage and schedule.</p><form onSubmit={submitQuote}><label>Name<input required autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label><label>Phone<input required type="tel" autoComplete="tel" pattern="[0-9+() -]{8,}" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="+91" /></label><label>Project type<select value={form.projectType} onChange={(event) => setForm({ ...form, projectType: event.target.value })}><option>Residential</option><option>Commercial</option><option>Infrastructure</option><option>Industrial</option><option>Other</option></select></label><label>Concrete grade<select value={grade} onChange={(event) => setGrade(event.target.value)}>{grades.map((item) => <option key={item.name}>{item.name}</option>)}</select></label><label className="ic-form-wide">Project location<input required autoComplete="street-address" value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} placeholder="Area or project address" /></label><label>Quantity (m³)<input required type="number" min="0.1" step="0.1" value={volume} onChange={(event) => setVolume(event.target.value)} /></label><label>Pump required?<select value={pump} onChange={(event) => setPump(event.target.value)}><option>No</option><option>Yes</option><option>Need advice</option></select></label><label className="ic-form-wide">Required date<input required type="date" min={new Date().toISOString().slice(0, 10)} value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} /></label><label className="ic-form-wide">Company / project name <span className="ic-optional">Optional</span><input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} /></label><button className="ic-button ic-button-dark ic-form-wide" type="submit">PREPARE WHATSAPP ENQUIRY <ArrowRight size={16} /></button><small className="ic-form-wide">Your browser will prepare a WhatsApp message. Nothing is sent until you press send in WhatsApp.</small></form></>}</section></div>}

      {lightbox && <div className="ic-lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setLightbox(null); }}><button className="ic-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close project detail"><X /></button><img src={image(lightbox.image, 1400)} alt={`${lightbox.category} project photo placeholder — replace with real photo`} /><div><span className="ic-photo-placeholder">REPLACE WITH REAL PHOTO</span><span>{lightbox.category} / PROJECT PLACEHOLDER</span><h2>{lightbox.title}</h2><p>{lightbox.description}</p><button className="ic-button ic-button-orange" onClick={() => { setLightbox(null); openQuote(); }}>DISCUSS A SIMILAR PROJECT <ArrowRight size={16} /></button></div></div>}
    </main>
  );
}
