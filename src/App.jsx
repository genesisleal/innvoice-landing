import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BrandPage from './pages/BrandPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/brand" element={<BrandPage />} />
    </Routes>
  )
}
