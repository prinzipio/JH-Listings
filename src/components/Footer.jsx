import logo from '../assets/jh-listings-logo.jpg'

export default function Footer({ listing, onNavClick }) {
  const year = new Date().getFullYear()

  const handleNavClick = (page) => {
    if (onNavClick) {
      onNavClick(page)
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300 dark:text-gray-400 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="JH Listings" className="h-10 w-auto rounded-md bg-white p-1" />
            <p className="text-sm text-gray-400 dark:text-gray-500">{listing.address}</p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm">
            <button onClick={() => handleNavClick('hero')} className="hover:text-white dark:hover:text-gray-200 transition-colors border-none bg-transparent cursor-pointer p-0">Home</button>
            <button onClick={() => handleNavClick('gallery')} className="hover:text-white dark:hover:text-gray-200 transition-colors border-none bg-transparent cursor-pointer p-0">Photos</button>
            <button onClick={() => handleNavClick('pricing')} className="hover:text-white dark:hover:text-gray-200 transition-colors border-none bg-transparent cursor-pointer p-0">Pricing</button>
            <button onClick={() => handleNavClick('rules')} className="hover:text-white dark:hover:text-gray-200 transition-colors border-none bg-transparent cursor-pointer p-0">Rules</button>
            <button onClick={() => handleNavClick('faq')} className="hover:text-white dark:hover:text-gray-200 transition-colors border-none bg-transparent cursor-pointer p-0">FAQ</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-white dark:hover:text-gray-200 transition-colors border-none bg-transparent cursor-pointer p-0">Contact</button>
          </nav>
        </div>

        <div className="border-t border-gray-800 dark:border-slate-800 mt-6 pt-6 text-center text-sm text-gray-500 dark:text-gray-600">
          &copy; {year} JH Listings. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
