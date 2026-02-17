import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BrandPage from './pages/BrandPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/brand" element={<BrandPage />} />
      <Route path="/terminos-y-condiciones" element={<TermsPage />} />
      <Route path="/privacidad" element={<PrivacyPage />} />
    </Routes>
  )
}
