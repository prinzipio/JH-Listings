import { useState, useEffect } from 'react'
import Reveal from './Reveal'

export default function Gallery({ listing }) {
  const photos = listing.photos || []
  const hasPhotos = photos.length > 0
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goPrev = () => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === photos.length - 1 ? 0 : i + 1))

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  return (
    <section id="gallery" className="scroll-mt-20 section-padding bg-gray-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Take a Look</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">Photos</h2>
          <div className="section-title-underline" />
        </Reveal>

        {hasPhotos ? (
          <Reveal delay={100}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-black shadow-xl cursor-pointer group" onClick={() => setLightboxOpen(true)}>
                <img
                  key={index}
                  src={photos[index]}
                  alt={`${listing.title} - photo ${index + 1} of ${photos.length}`}
                  className="w-full h-72 md:h-[28rem] object-cover animate-fadein group-hover:scale-105 group-hover:opacity-90 transition-transform transition-opacity duration-300"
                  loading="lazy"
                />
              </div>

              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous photo"
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-white/90 hover:bg-white shadow-lg text-gray-800 transition-all hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next photo"
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-white/90 hover:bg-white shadow-lg text-gray-800 transition-all hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {photos.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setIndex(dotIdx)}
                        aria-label={`Go to photo ${dotIdx + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          dotIdx === index ? 'bg-white w-6' : 'bg-white/50 w-2.5'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </Reveal>
        ) : (
          <Reveal delay={100}>
            <div className="bg-white dark:bg-slate-700 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl p-12 text-center">
              <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="placeholder-text text-lg">
                [OWNER TO PROVIDE] — Real property photos will be added here
              </p>
            </div>
          </Reveal>
        )}

        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={photos[index]}
                alt={`${listing.title} - photo ${index + 1} of ${photos.length}`}
                className="max-w-full max-h-full object-contain"
              />

              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {photos.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setIndex(dotIdx)}
                        aria-label={`Go to photo ${dotIdx + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          dotIdx === index ? 'bg-white w-8' : 'bg-white/50 w-2'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="absolute bottom-6 right-6 text-white/80 text-sm font-medium">
                    {index + 1} / {photos.length}
                  </p>
                </>
              )}

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 flex items-center justify-center h-12 w-12 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all hover:scale-110"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <p className="absolute bottom-6 left-6 text-white/60 text-xs">Press ESC to close • Use arrow keys to navigate</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
