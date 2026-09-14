import Reveal from './Reveal'

export default function Rules({ listing }) {
  const hasRules = listing.rules && listing.rules.length > 0

  return (
    <section id="rules" className="section-padding bg-gray-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">House Guidelines</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">Rules</h2>
          <div className="section-title-underline" />
        </Reveal>

        {hasRules ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {listing.rules.map((rule, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="card-elevated flex items-start gap-3 p-5 h-full">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-light dark:bg-slate-700 text-primary dark:text-primary flex-shrink-0">•</span>
                  <span className="text-gray-700 dark:text-gray-300 pt-1">{rule}</span>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="bg-white dark:bg-slate-700 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl p-12 text-center mb-6">
              <p className="placeholder-text text-lg">
                [OWNER TO PROVIDE] — House rules will be listed here
              </p>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <Reveal delay={100}>
            <div className="bg-gradient-to-br from-primary-light dark:from-slate-800 to-white dark:to-slate-900 rounded-xl p-6 border border-primary/10 dark:border-slate-700 text-center h-full">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-2">Check-in</h3>
              <p className={listing.checkIn === "[OWNER TO PROVIDE]" ? "placeholder-text" : "text-xl font-bold text-primary-dark dark:text-primary"}>
                {listing.checkIn}
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-gradient-to-br from-primary-light dark:from-slate-800 to-white dark:to-slate-900 rounded-xl p-6 border border-primary/10 dark:border-slate-700 text-center h-full">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-2">Check-out</h3>
              <p className={listing.checkOut === "[OWNER TO PROVIDE]" ? "placeholder-text" : "text-xl font-bold text-primary-dark dark:text-primary"}>
                {listing.checkOut}
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="bg-gradient-to-br from-primary-light dark:from-slate-800 to-white dark:to-slate-900 rounded-xl p-6 border border-primary/10 dark:border-slate-700 text-center h-full">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-2">Max Guests</h3>
              <p className={listing.maxGuests === "[OWNER TO PROVIDE]" ? "placeholder-text" : "text-xl font-bold text-primary-dark dark:text-primary"}>
                {listing.maxGuests}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
