import Reveal from './Reveal'

export default function Location({ location }) {
  const hasMapEmbed = location.mapEmbed && !location.mapEmbed.startsWith("[OWNER")

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`

  return (
    <section id="location" className="scroll-mt-20 section-padding bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Find Us</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">Location</h2>
          <div className="section-title-underline" />
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-primary-light dark:bg-slate-800 rounded-xl p-6 mb-6 border border-primary/10 dark:border-slate-700">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-6 h-6 text-primary dark:text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg text-gray-900 dark:text-white font-medium text-center">{location.address}</p>
            </div>
            <div className="text-center">
              <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                ✨ Steps away from SM MOA
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          {hasMapEmbed ? (
            <div className="rounded-xl overflow-hidden mb-6 aspect-video shadow-xl">
              <iframe
                src={location.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location"
              />
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl p-12 text-center mb-6 aspect-video flex items-center justify-center">
              <p className="placeholder-text text-lg">
                [OWNER TO PROVIDE] — Google Maps embed will be added here
              </p>
            </div>
          )}
        </Reveal>

        <Reveal delay={300}>
          <div className="text-center">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
