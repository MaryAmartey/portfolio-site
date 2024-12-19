import AboutPage from './AboutPage'
import ResumePage from './ResumePage'
import ProjectsPage from './ProjectsPage'
import Navigation from './Navigation'
import Testimonials from './Testimonials'
import Recommendations from './RecommendationsPage'
import '../styles/App.css'

function ContentPage() {
  return (
    <>
      <Navigation />

      <AboutPage />
      <ResumePage />
      <ProjectsPage />
      <Testimonials />
      <Recommendations />
    </>
  )
}

export default ContentPage
