import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const sectionId = hash.slice(1) // Extract the section ID from the hash
    const sectionElement = document.getElementById(sectionId) // Find the section element

    if (sectionElement) {
      const isAboveSection = sectionElement.getBoundingClientRect().top > 0

      // Determine scrolling behavior based on the section's position
      const behavior = isAboveSection ? 'smooth' : 'auto'

      sectionElement.scrollIntoView({ behavior })
    } else {
      // Scroll to top if no hash or section not found
      if (hash) {
        // Scroll immediately to the top if hash exists but section not found
        window.scrollTo(0, 0)
      }
    }
  }, [pathname, hash])

  return null
}
