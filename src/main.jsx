import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import '@fontsource/inter';
import App from './App.jsx';
import ResultPage from './pages/ResultPage.jsx';
import OverviewPage from './pages/OverviewPage.jsx';
import { Analytics } from '@vercel/analytics/react';
import ContactUs from './pages/Contactus.jsx';
import AddCompanyPage from './pages/AddCompanyPage.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Analytics />
    <Routes>
      <Route Component={App} path='/'/>
      <Route Component={ResultPage} path='/result_page'/>
      <Route Component={OverviewPage} path='/overview'/>
      <Route Component={ContactUs} path='/contact_us'/>
      <Route Component={AddCompanyPage} path='/add_company'/>
    </Routes>
  </Router>,
)
