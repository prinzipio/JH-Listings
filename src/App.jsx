import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TheUnit from './components/TheUnit'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Calendar from './components/Calendar'
import Rules from './components/Rules'
import Location from './components/Location'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { listing, location } from './data/listings'

function App() {
  const [activePage, setActivePage] = useState('hero')
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return saved === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Apply dark class on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const scrollToContact = () => {
    setActivePage('hero')
    setTimeout(() => {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  const scrollToSection = (sectionId) => {
    setActivePage('hero')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }

  const pages = {
    hero: () => <><Hero listing={listing} onAsk={scrollToContact} /><TheUnit listing={listing} /><Gallery listing={listing} /><Reviews /><Pricing listing={listing} /><Calendar /><Location location={location} /><Contact listing={listing} /></>,
    rules: () => <><Hero listing={listing} onAsk={scrollToContact} /><Rules listing={listing} /></>,
    faq: () => <><Hero listing={listing} onAsk={scrollToContact} /><FAQ /></>,
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header listing={listing} darkMode={darkMode} onDarkModeToggle={() => setDarkMode(!darkMode)} onNavClick={(page) => {
        if (['gallery', 'pricing', 'location'].includes(page)) {
          scrollToSection(page)
        } else {
          setActivePage(page)
        }
      }} />
      {pages[activePage] && pages[activePage]()}
      <Footer listing={listing} onNavClick={(page) => {
        if (['gallery', 'pricing', 'location'].includes(page)) {
          scrollToSection(page)
        } else if (page === 'contact') {
          setActivePage('hero')
          setTimeout(() => {
            const element = document.getElementById('contact')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }, 0)
        } else {
          setActivePage(page)
        }
      }} />
    </div>
  )
}

export default App
