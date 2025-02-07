import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

// Lazy load components
const HomePage = lazy(() => import('./HomePage'))
const ContentPage = lazy(() => import('./ContentPage'))
const ScrollToTop = lazy(() => import('./ScrollToTop'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/content/*" element={<ContentPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
