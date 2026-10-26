import { photo } from '../content.js';

export default function PhotoPlaceholder({ id, alt, className = '', width = 1400, priority = false }) {
  return (
    <div className={`mp-photo ${className}`}>
      <img src={photo(id, width)} alt={alt + ' — replace with real Icon Concrete photo'} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />
      <span>REPLACE WITH REAL PHOTO</span>
    </div>
  );
}
