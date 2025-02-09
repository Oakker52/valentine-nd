import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure your styles are being applied
import App from './App'; // Import the App component, not ValentinePage

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Render the App component, which includes routing */}
  </StrictMode>,
);
