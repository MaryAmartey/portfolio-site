import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import '../styles/App.css'
import gsap from 'gsap'
import PropTypes from 'prop-types'

function Navigation(props) {
  const location = useLocation()
  const { section } = useParams()
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [isVisible, setIsVisible] = useState(true)
  const [activeLink, setActiveLink] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setActiveLink(location.hash)
  }, [location.hash])

  let scrollTimeout

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    setIsVisible(currentScrollPos <= prevScrollPos)

    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    setPrevScrollPos(currentScrollPos)
  }

  React.useEffect(() => {
    scrollToSection(section)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [section])

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { duration: 1 } })
    gsap.set('nav', { y: '0%' })
    t1.fromTo('nav', { y: '-100%' }, { y: isVisible ? '0%' : '-100%' })
  }, [isVisible])

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinkClasses = (isActive) =>
    `relative px-3 py-2 transition-all duration-300 ${
      isActive
        ? 'text-blue-400'
        : 'text-gray-300 hover:text-white'
    } before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-blue-400 before:to-green-400 hover:before:w-full hover:before:opacity-100`

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${props.color}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold gradient-text">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={navLinkClasses(activeLink === '')}>
              Home
            </a>
            <a href="/content#about" className={navLinkClasses(activeLink === '#about')}>
              About
            </a>
            <a href="/content#resume" className={navLinkClasses(activeLink === '#resume')}>
              Resume
            </a>
            <a href="/content#projects" className={navLinkClasses(activeLink === '#projects')}>
              Projects
            </a>
            <a href="/content#testimonials" className={navLinkClasses(activeLink === '#testimonials')}>
              Testimonials
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
            >
              Home
            </a>
            <a
              href="/content#about"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
            >
              About
            </a>
            <a
              href="/content#resume"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
            >
              Resume
            </a>
            <a
              href="/content#projects"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
            >
              Projects
            </a>
            <a
              href="/content#testimonials"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
            >
              Testimonials
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Navigation
