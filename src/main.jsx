import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WrappedApp } from './App';
import OJ from './assets/oliverj.png';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<img src={OJ} alt='OJImg' />}>
      <WrappedApp />
    </Suspense>
  </React.StrictMode>
);
