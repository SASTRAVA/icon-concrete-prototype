import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import IconReadymix from './pages/IconReadymix.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <a className="icon-skip-link" href="#planner">Skip to pour planner</a>
    <IconReadymix />
  </StrictMode>,
);
