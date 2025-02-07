import { lazy, Suspense } from 'react'
import Navigation from './Navigation'
import LoadingSpinner from './LoadingSpinner'
import '../styles/App.css'

// Lazy load components with explicit default imports
const AboutPage = lazy(() =>
  import('./AboutPage').then((module) => ({ default: module.default }))
)
const ResumePage = lazy(() =>
  import('./ResumePage').then((module) => ({ default: module.default }))
)
const ProjectsPage = lazy(() =>
  import('./ProjectsPage').then((module) => ({ default: module.default }))
)
const Testimonials = lazy(() =>
  import('./Testimonials').then((module) => ({ default: module.default }))
)
const Recommendations = lazy(() =>
  import('./RecommendationsPage').then((module) => ({
    default: module.default,
  }))
)
const TechStack = lazy(() =>
  import('./TechStack').then((module) => ({ default: module.default }))
)

function ContentPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navigation color="bg-gray-900" />
      <main id="main" tabIndex="-1">
        <Suspense fallback={<LoadingSpinner />}>
          <AboutPage />
          <ResumePage />
          <TechStack />
          <ProjectsPage />
          <Testimonials />
          <Recommendations />
        </Suspense>
      </main>
    </div>
  )
}

export default ContentPage
