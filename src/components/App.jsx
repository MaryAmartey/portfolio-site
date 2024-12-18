import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ContentPage from './ContentPage'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/content/*" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
