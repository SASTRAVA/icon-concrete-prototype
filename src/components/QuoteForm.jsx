import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { gradeGuide, services } from '../content.js';

const blankForm = {
  name: '', phone: '', location: '', service: '', grade: 'M25',
  quantity: '', pump: 'No', date: '', details: '',
};

export default function QuoteForm() {
  const location = useLocation();
  const routeState = location.state ?? {};
  const [form, setForm] = useState(() => ({ ...blankForm, ...routeState }));
  const [prepared, setPrepared] = useState(false);
  const earliestDate = new Date().toISOString().slice(0, 10);
  const whatsappUrl = useMemo(() => {
    const message = [
      'Hi Icon Concrete, I would like to request a quote.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Project location: ${form.location}`,
      `Service: ${form.service}`,
      `Concrete grade: ${form.grade}`,
      `Estimated quantity: ${form.quantity} m³`,
      `Pump required: ${form.pump}`,
      `Required delivery date: ${form.date}`,
      `Additional details: ${form.details || 'None provided'}`,
    ].join('\n');
    return `https://wa.me/917997777078?text=${encodeURIComponent(message)}`;
  }, [form]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setPrepared(false);
  }

  function submit(event) {
    event.preventDefault();
    setPrepared(true);
  }

  return (
    <section className="mp-quote-box" aria-labelledby="quote-form-title">
      <div className="mp-quote-box-head"><span className="mp-eyebrow">QUOTE REQUEST / HYDERABAD</span><h2 id="quote-form-title">Tell us about<br /><em>your pour.</em></h2><p>Share the details below. Your browser will prepare a WhatsApp message for you to review and send.</p></div>
      {prepared ? (
        <div className="mp-form-prepared" role="status">
          <span><Check /></span><div><strong>Your message is ready to review.</strong><p>WhatsApp will open with your enquiry details. The message is not sent until you press send there.</p></div>
          <a className="mp-button mp-button-orange" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> OPEN PREPARED WHATSAPP MESSAGE <ArrowRight size={15} /></a>
          <button className="mp-back-edit" type="button" onClick={() => setPrepared(false)}>EDIT DETAILS</button>
        </div>
      ) : (
        <form className="mp-quote-form" onSubmit={submit}>
          <label>Full name<input required autoComplete="name" value={form.name} onChange={(event) => update('name', event.target.value)} /></label>
          <label>Phone number<input required type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{8,}" title="Enter a valid phone number." placeholder="+91" value={form.phone} onChange={(event) => update('phone', event.target.value)} /></label>
          <label className="mp-field-wide">Project location<input required autoComplete="street-address" value={form.location} onChange={(event) => update('location', event.target.value)} placeholder="Area or project address" /></label>
          <label>Service required<select required value={form.service} onChange={(event) => update('service', event.target.value)}><option value="">Choose a service</option>{services.map((item) => <option key={item.id} value={item.title}>{item.title}</option>)}</select></label>
          <label>Concrete grade<select required value={form.grade} onChange={(event) => update('grade', event.target.value)}>{gradeGuide.map(([grade]) => <option key={grade} value={grade}>{grade}</option>)}</select></label>
          <label>Estimated quantity (m³)<input required type="number" min="0.1" step="0.1" inputMode="decimal" value={form.quantity} onChange={(event) => update('quantity', event.target.value)} /></label>
          <label>Concrete pump required?<select value={form.pump} onChange={(event) => update('pump', event.target.value)}><option>No</option><option>Yes</option></select></label>
          <label>Required delivery date<input required type="date" min={earliestDate} value={form.date} onChange={(event) => update('date', event.target.value)} /></label>
          <label className="mp-field-wide">Additional project details<textarea rows="4" value={form.details} onChange={(event) => update('details', event.target.value)} placeholder="Access, pour timing, or other useful details" /></label>
          <button className="mp-button mp-button-orange mp-field-wide" type="submit">PREPARE WHATSAPP ENQUIRY <ArrowRight size={16} /></button>
          <p className="mp-form-note mp-field-wide">This form prepares a message on your device. It does not submit information to Icon Concrete until you send the WhatsApp message.</p>
        </form>
      )}
    </section>
  );
}
