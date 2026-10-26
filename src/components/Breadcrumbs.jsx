import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ current }) {
  return (
    <nav className="mp-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link><ChevronRight aria-hidden="true" size={13} /><span aria-current="page">{current}</span>
    </nav>
  );
}
