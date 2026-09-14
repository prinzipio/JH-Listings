import Reveal from './Reveal'

export default function Feedback() {
  return (
    <section id="feedback" className="section-padding bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Your Experience</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Share Your Feedback</h2>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-4">Help us improve by sharing your experience at JH Listings</p>
          <div className="section-title-underline" />
        </Reveal>

        <Reveal delay={100}>
          <div className="card-elevated p-4 sm:p-8 bg-white rounded-2xl shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSftYczal2bXnCU6ZU5M7qX7_nV3-afkgllsf8FdyFo5KgZgnQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-lg"
              title="Feedback Form"
            >
              Loading…
            </iframe>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
