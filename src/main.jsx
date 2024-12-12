import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ResultPage from './pages/ResultPage.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route Component={App} path='/'/>
      <Route Component={ResultPage} path='/result_page'/>
    </Routes>
  </Router>,
)
