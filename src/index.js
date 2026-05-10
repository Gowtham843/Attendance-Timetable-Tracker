import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import Convex
import { ConvexProvider, ConvexReactClient } from 'convex/react';

// Create the Convex client
const convex = new ConvexReactClient('https://tangible-egret-413.convex.cloud');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App component with ConvexProvider */}
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);


