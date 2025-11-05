import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/style/Nav.css'
import './assets/style/App.css'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import WebFooter from './components/Footer.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
    <Footer />
  </StrictMode>,
)
