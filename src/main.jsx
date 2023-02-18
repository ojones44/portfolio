import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WrappedApp } from './App';
import { OliverLogo } from './svgs/embedded';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<OliverLogo />}>
      <WrappedApp />
    </Suspense>
  </React.StrictMode>
);
