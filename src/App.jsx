// React Imports
import { HashRouter, Route, Routes } from 'react-router-dom';

// Page Imports
import Home from './pages/Home';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
