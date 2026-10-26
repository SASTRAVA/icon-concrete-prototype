import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { projects, photo } from '../content.js';
import PhotoPlaceholder from './PhotoPlaceholder.jsx';

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure'];

export default function ProjectGallery({ masonry = false, limit }) {
  const [category, setCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);
  const list = category === 'All' ? projects : projects.filter((item) => item.category === category);
  const items = typeof limit === 'number' ? list.slice(0, limit) : list;
  const active = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const keydown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % items.length);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + items.length) % items.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', keydown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', keydown);
    };
  }, [activeIndex, items.length]);

  return <>
    <div className="mp-gallery-filters" role="group" aria-label="Filter projects by category">{categories.map((item) => <button type="button" key={item} className={category === item ? 'selected' : ''} aria-pressed={category === item} onClick={() => { setCategory(item); setActiveIndex(null); }}>{item}</button>)}</div>
    {items.length === 0 ? <p className="mp-empty-state">No photos in this category yet. Approved project photos will be added here.</p> : <div className={masonry ? 'mp-gallery-grid mp-gallery-masonry' : 'mp-gallery-grid'}>
      {items.map((item, index) => <button type="button" className="mp-gallery-card" key={item.category + item.title} onClick={() => setActiveIndex(index)} aria-label={`Open ${item.category} project photo placeholder`}><PhotoPlaceholder id={item.image} alt={item.category + ' project photo'} width={1000} /><span className="mp-gallery-category">{item.category.toUpperCase()} / {String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><small>{item.caption}</small></button>)}
    </div>}
    {active && <div className="mp-lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}><section className="mp-lightbox-dialog" role="dialog" aria-modal="true" aria-label={`${active.category} project photo`}><button className="mp-lightbox-close" type="button" aria-label="Close gallery" onClick={() => setActiveIndex(null)}><X /></button><img src={photo(active.image, 1800)} alt={active.category + ' project photo placeholder — replace with real Icon Concrete photo'} /><div className="mp-lightbox-caption"><span>{active.category.toUpperCase()} / PROJECT PLACEHOLDER</span><h2>{active.title}</h2><p>{active.caption}</p><small>REPLACE WITH REAL PROJECT PHOTO</small></div><button className="mp-lightbox-prev" type="button" aria-label="Previous project image" onClick={() => setActiveIndex((index) => (index - 1 + items.length) % items.length)}><ArrowLeft /></button><button className="mp-lightbox-next" type="button" aria-label="Next project image" onClick={() => setActiveIndex((index) => (index + 1) % items.length)}><ArrowRight /></button></section></div>}
  </>;
}
