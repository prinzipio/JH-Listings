import Reveal from './Reveal'

export default function TheUnit({ listing }) {
  return (
    <section id="unit" className="scroll-mt-20 section-padding bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Studio Condominium</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">The Unit</h2>
          <div className="section-title-underline" />
        </Reveal>

        <Reveal delay={100}>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-14">
            {listing.description}
          </p>
        </Reveal>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {listing.features.map((feature, idx) => (
            <div key={idx} className="card-elevated p-6 text-center h-full">
              <div className="icon-circle mx-auto mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <Reveal delay={150}>
          <div className="mt-14 bg-gradient-to-br from-primary-light dark:from-slate-800 to-white dark:to-slate-900 rounded-2xl p-8 md:p-10 border border-primary/10 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">About This Studio</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                <span>Modern furnished studio with all essential amenities</span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                <span>Located in MOA Complex - prime location for shopping and entertainment</span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                <span>Access to sky terrace with views</span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                <span>Well-equipped comfort room</span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                <span>Complete kitchen facilities</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
