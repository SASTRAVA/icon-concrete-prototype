import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { gradeGuide } from '../content.js';

const structures = ['Foundation', 'Slab', 'Columns & core', 'Infrastructure'];

export default function PourPlanner() {
  const [step, setStep] = useState(0);
  const [structure, setStructure] = useState('Slab');
  const [grade, setGrade] = useState('M25');
  const [shape, setShape] = useState('Slab');
  const [dimensions, setDimensions] = useState({ length: '', width: '', depth: '' });
  const [service, setService] = useState('Ready-Mix Concrete');
  const volume = useMemo(() => {
    const { length, width, depth } = dimensions;
    if (!length || !width || !depth) return 0;
    const vertical = shape === 'Column' ? Number(depth) : Number(depth) / 1000;
    return Number((Number(length) * Number(width) * vertical).toFixed(2));
  }, [dimensions, shape]);
  const update = (field, value) => setDimensions((current) => ({ ...current, [field]: value }));
  const quoteState = { service, grade, quantity: volume ? String(volume) : '', details: `Structure: ${structure}; calculator type: ${shape}` };

  return (
    <section className="mp-planner" aria-labelledby="planner-title">
      <div className="mp-planner-art" aria-hidden="true"><span className="mp-plan-circle mp-plan-circle-1" /><span className="mp-plan-circle mp-plan-circle-2" /><div className="mp-plan-block"><small>ICON / POUR PLAN</small><strong>{step === 0 ? structure : step === 1 ? grade : volume ? `${volume} m³` : 'VOLUME'}</strong></div><span className="mp-plan-mark">A—A / STRUCTURAL VIEW</span></div>
      <div className="mp-planner-form">
        <div className="mp-planner-steps">{['STRUCTURE', 'GRADE', 'VOLUME'].map((name, index) => <button key={name} type="button" className={step === index ? 'is-current' : ''} onClick={() => setStep(index)}><span>{step > index ? <Check size={12} /> : `0${index + 1}`}</span>{name}</button>)}</div>
        {step === 0 && <><span className="mp-eyebrow">STEP 01 / STRUCTURE</span><h3 id="planner-title">What are you pouring?</h3><p>Choose an application to start a planning estimate. Follow the project engineer’s specification for the actual order.</p><div className="mp-planner-choices">{structures.map((item) => <button type="button" className={structure === item ? 'selected' : ''} key={item} onClick={() => setStructure(item)}>{item}{structure === item && <Check size={15} />}</button>)}</div><button className="mp-button mp-button-dark" type="button" onClick={() => setStep(1)}>NEXT / CHOOSE GRADE <ArrowRight size={15} /></button></>}
        {step === 1 && <><span className="mp-eyebrow">STEP 02 / MIX</span><h3>Choose the specified grade.</h3><p>Availability shown here is a guide only. Confirm grades offered with Icon Concrete.</p><div className="mp-grade-options">{gradeGuide.map(([item]) => <button type="button" className={grade === item ? 'selected' : ''} key={item} onClick={() => setGrade(item)}>{item}</button>)}</div><label className="mp-planner-service">Service<select value={service} onChange={(event) => setService(event.target.value)}><option>Ready-Mix Concrete</option><option>Concrete Pumping</option></select></label><div className="mp-planner-actions"><button type="button" onClick={() => setStep(0)}>BACK</button><button className="mp-button mp-button-dark" type="button" onClick={() => setStep(2)}>NEXT / ESTIMATE VOLUME <ArrowRight size={15} /></button></div></>}
        {step === 2 && <><span className="mp-eyebrow">STEP 03 / VOLUME</span><h3>Estimate the quantity.</h3><p>Dimensions are in metres except slab or footing depth, which is in millimetres. This is a planning estimate only.</p><div className="mp-calc-tabs">{['Slab', 'Footing', 'Column'].map((item) => <button type="button" className={shape === item ? 'selected' : ''} key={item} onClick={() => setShape(item)}>{item}</button>)}</div><div className="mp-calc-fields"><label>{shape === 'Column' ? 'Width (m)' : 'Length (m)'}<input type="number" min="0" step="0.01" value={dimensions.length} onChange={(event) => update('length', event.target.value)} /></label><label>Width (m)<input type="number" min="0" step="0.01" value={dimensions.width} onChange={(event) => update('width', event.target.value)} /></label><label>{shape === 'Column' ? 'Height (m)' : shape === 'Footing' ? 'Depth (mm)' : 'Thickness (mm)'}<input type="number" min="0" step="0.01" value={dimensions.depth} onChange={(event) => update('depth', event.target.value)} /></label></div><div className="mp-volume-output"><span>ESTIMATED VOLUME</span><strong>{volume || '—'} <small>m³</small></strong></div><div className="mp-planner-actions"><button type="button" onClick={() => setStep(1)}>BACK</button><Link className="mp-button mp-button-orange" to="/contact" state={quoteState}>GET A QUOTE FOR THIS VOLUME <ArrowRight size={15} /></Link></div></>}
      </div>
      <p className="mp-planner-caution">The quantity does not include wastage, openings, reinforcement displacement or site-specific adjustments.</p>
    </section>
  );
}
