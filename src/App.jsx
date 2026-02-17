import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BrandPage from './pages/BrandPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/brand" element={<BrandPage />} />
      <Route path="/terminos-y-condiciones" element={<TermsPage />} />
    </Routes>
  )
}
