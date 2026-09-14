import { useState } from 'react'
import Reveal from './Reveal'

const SAMPLE_REVIEWS = [
  {
    id: 1,
    author: "Maria Santos",
    rating: 5,
    date: "August 2025",
    comment: "Amazing location and very clean! The sky terrace view is beautiful. Highly recommend for travelers visiting MOA Complex.",
  },
  {
    id: 2,
    author: "John Reyes",
    rating: 5,
    date: "July 2025",
    comment: "Perfect for a short stay. The unit is well-equipped and the owner is very responsive. Would definitely stay here again.",
  },
  {
    id: 3,
    author: "Claire Mendoza",
    rating: 5,
    date: "June 2025",
    comment: "Comfortable and convenient. Great for business travelers. Everything you need is provided.",
  },
]

function ReviewCard({ review }) {
  return (
    <div className="card-elevated p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{review.author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
        </div>
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <span key={i} className="text-accent text-lg">★</span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{review.comment}</p>
    </div>
  )
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goNext = () => setCurrentIndex((currentIndex + 1) % SAMPLE_REVIEWS.length)
  const goPrev = () => setCurrentIndex((currentIndex - 1 + SAMPLE_REVIEWS.length) % SAMPLE_REVIEWS.length)

  return (
    <section id="reviews" className="section-padding bg-gray-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="section-eyebrow text-xs sm:text-sm">Guest Feedback</span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">Guest Reviews</h2>
          <div className="section-title-underline" />
        </Reveal>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <button
                onClick={goPrev}
                className="p-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous review"
              >
                ←
              </button>
              <div className="flex-1">
                <ReviewCard review={SAMPLE_REVIEWS[currentIndex]} />
              </div>
              <button
                onClick={goNext}
                className="p-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Next review"
              >
                →
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
              {currentIndex + 1} of {SAMPLE_REVIEWS.length}
            </p>
          </Reveal>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {SAMPLE_REVIEWS.map((review, index) => (
            <Reveal key={review.id} delay={index * 100}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Share your experience and help other travelers discover JH Listings</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Reviews are collected through our contact form and Facebook page</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
